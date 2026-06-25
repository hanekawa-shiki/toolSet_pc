import config from './config';

/**
 * 将文件路径转换为路由路径
 *
 * 规则：
 * - pages/home.tsx → /home
 * - pages/about.tsx → /about
 * - pages/home/home.tsx → /home/home
 * - pages/users/[id].tsx → /users/:id
 */
function filePathToRoutePath(filePath: string): string {
  let relative = filePath
    .replace(/^.*\/pages\//, '')
    .replace(/\.(?:tsx|ts|jsx|js)$/, '');

  relative = relative.replace(/\/index$/, '');
  if (relative === 'index')
    relative = '';

  relative = relative.replace(/\[([^\]]+)\]/g, (_m: string, param?: string) => {
    if (param === undefined || param === null || param === '') {
      return _m;
    }
    if (param.startsWith('...')) {
      return '*';
    }
    return `:${param}`;
  });

  return `/${relative}`;
}

/**
 * 从文件路径中提取并格式化标题
 * 例：pages/home.tsx → Home，pages/getting-started.tsx → Getting Started
 */
function deriveTitleFromFilePath(filePath: string): string {
  const match = filePath.match(/\/pages\/(.+)\.[^.]+$/);
  const name = match ? match[1] : filePath;

  const dirMatch = name.match(/(.+)\/index$/);
  const raw = dirMatch ? dirMatch[1] : name;

  return raw
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * 从目录名派生标题
 * 例：pages/home/ → Home，pages/user-manage/ → User Manage
 */
function deriveTitleFromDirName(dirName: string): string {
  return dirName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * 检查文件路径是否应被排除
 */
function isExcluded(filePath: string, excludes: string[]): boolean {
  const relative = filePath.replace(/^.*\/pages\//, '');

  return excludes.some((pattern) => {
    const regex = globToRegex(pattern);
    return regex.test(relative) || regex.test(filePath);
  });
}

/**
 * 简单的 glob 模式转正则表达式
 */
function globToRegex(pattern: string): RegExp {
  const regexStr = pattern
    .replace(/\./g, '\\.')
    .replace(/\*\*/g, '{{GLOBSTAR}}')
    .replace(/\*/g, '[^/]*')
    .replace(/\{\{GLOBSTAR\}\}/g, '.*')
    .replace(/\?/g, '[^/]');

  return new RegExp(`^${regexStr}$`);
}

/**
 * 判断文件路径是否为 index 文件
 */
function isIndexFile(filePath: string): boolean {
  return /\/pages\/.*\/index\.[^.]+$/.test(filePath) || /\/pages\/index\.[^.]+$/.test(filePath);
}

/**
 * 从文件路径中提取相对 pages 的第一级目录名
 * 如果是顶级文件（如 pages/about.tsx），返回 null
 * 如果是二级目录文件（如 pages/home/home.tsx），返回 'home'
 */
function getFirstLevelDir(filePath: string): string | null {
  const relative = filePath.replace(/^.*\/pages\//, '');
  const segments = relative.split('/');
  // 如果只有一个段，说明是顶级文件
  if (segments.length <= 1)
    return null;
  return segments[0];
}

/**
 * 自动扫描 pages 目录，生成路由元数据
 *
 * 使用 Vite 的 import.meta.glob 实现：
 * - 开发时：利用 Vite 的 HMR，新增/删除文件时自动更新
 * - 构建时：静态分析生成对应的 chunk
 */
// Meta 缓存，首次加载页面时填充
const metaCache = new Map<string, PageMeta>();

export function getAutoRouteMetas(): AutoRouteMeta[] {
  const { excludes } = config;

  // 单一 glob：懒加载页面组件
  const pageModules = import.meta.glob<PageModule & { meta?: PageMeta }>(
    '../pages/**/*.{tsx,ts,jsx,js}',
    { eager: false },
  );

  const metas: AutoRouteMeta[] = [];

  for (const [filePath, importFn] of Object.entries(pageModules)) {
    if (isExcluded(filePath, excludes)) {
      continue;
    }

    if (isIndexFile(filePath)) {
      continue;
    }

    const routePath = filePathToRoutePath(filePath);

    // 包装 loader：加载模块时提取并缓存 meta
    const wrappedLoader = async (): Promise<PageModule> => {
      const mod = await importFn();
      if (mod.meta && !metaCache.has(filePath)) {
        metaCache.set(filePath, mod.meta);
      }
      return mod;
    };

    // 优先使用缓存的 meta（如果页面已被加载过）
    const pageMeta = metaCache.get(filePath);

    metas.push({
      filePath,
      path: routePath,
      title: deriveTitleFromFilePath(filePath),
      pageMeta,
      loader: wrappedLoader,
    });
  }

  metas.sort((a, b) => {
    const pathA = a.path || '';
    const pathB = b.path || '';
    if (pathA.includes('*'))
      return 1;
    if (pathB.includes('*'))
      return -1;
    const segmentsA = pathA.split('/').length;
    const segmentsB = pathB.split('/').length;
    if (segmentsA !== segmentsB)
      return segmentsA - segmentsB;
    return pathA.localeCompare(pathB);
  });

  return metas;
}

/**
 * 将路由元数据转换为侧边栏菜单项（支持嵌套）
 *
 * 规则：
 * - pages/about.tsx → 顶级菜单项 About
 * - pages/home/home.tsx → 菜单组 Home > Home（文件夹名称为一级菜单，文件名为子项）
 * - pages/home/about.tsx → 菜单组 Home > About
 * - pages/home/ 下只有一个文件时，仍然展开为子菜单
 */
export function getRouteMenuItems(): NavMainItem[] {
  const metas = getAutoRouteMetas();

  // 分组：顶级文件 vs 文件夹内的文件
  const topLevelFiles: AutoRouteMeta[] = [];
  const groupedByDir = new Map<string, AutoRouteMeta[]>();

  for (const meta of metas) {
    const dirName = getFirstLevelDir(meta.filePath);
    if (dirName === null) {
      topLevelFiles.push(meta);
    }
    else {
      const existing = groupedByDir.get(dirName) || [];
      existing.push(meta);
      groupedByDir.set(dirName, existing);
    }
  }

  const items: NavMainItem[] = [];

  // 顶级文件 → 直接作为菜单项
  for (const meta of topLevelFiles) {
    if (meta.pageMeta?.hidden)
      continue;
    const resolvedTitle = meta.pageMeta?.title ?? config.titleMap?.[meta.path] ?? meta.title;
    items.push({
      title: resolvedTitle,
      url: meta.path,
      icon: meta.pageMeta?.icon,
      isActive: meta.pageMeta?.isActive,
    });
  }

  // 文件夹 → 作为菜单组，文件夹内的文件为子项
  for (const [dirName, dirMetas] of groupedByDir) {
    const subItems: NavMainSubItem[] = [];

    for (const meta of dirMetas) {
      if (meta.pageMeta?.hidden)
        continue;
      const resolvedTitle = meta.pageMeta?.title ?? config.titleMap?.[meta.path] ?? meta.title;
      subItems.push({
        title: resolvedTitle,
        url: meta.path,
      });
    }

    if (subItems.length === 0)
      continue;

    const dirTitle = config.titleMap?.[dirName] ?? deriveTitleFromDirName(dirName);
    items.push({
      title: dirTitle,
      url: '',
      items: subItems,
    });
  }

  return items;
}
