import config from './config';
import { resolveIcon } from './icon-map';

/**
 * 将文件路径转换为路由路径
 */
function filePathToRoutePath(filePath: string): string {
  let relative = filePath
    .replace(/^.*\/pages\//, '')
    .replace(/\.(?:tsx|ts|jsx|js)$/, '');

  relative = relative.replace(/\/index$/, '');
  if (relative === 'index')
    relative = '';

  relative = relative.replace(/\[([^\]]+)\]/g, (_m: string, param: string | undefined) => {
    if (param === undefined || param === '') {
      return _m;
    }
    if (param.startsWith('...'))
      return '*';
    return `:${param}`;
  });

  return `/${relative}`;
}

/**
 * 从文件路径中提取并格式化标题
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

function deriveTitleFromDirName(dirName: string): string {
  return dirName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function isExcluded(filePath: string, excludes: string[]): boolean {
  const relative = filePath.replace(/^.*\/pages\//, '');
  return excludes.some((pattern) => {
    const regex = globToRegex(pattern);
    return regex.test(relative) || regex.test(filePath);
  });
}

function globToRegex(pattern: string): RegExp {
  const regexStr = pattern
    .replace(/\./g, '\\.')
    .replace(/\*\*/g, '{{GLOBSTAR}}')
    .replace(/\*/g, '[^/]*')
    .replace(/\{\{GLOBSTAR\}\}/g, '.*')
    .replace(/\?/g, '[^/]');
  return new RegExp(`^${regexStr}$`);
}

function isIndexFile(filePath: string): boolean {
  return /\/pages\/.*\/index\.[^.]+$/.test(filePath) || /\/pages\/index\.[^.]+$/.test(filePath);
}

function getFirstLevelDir(filePath: string): string | null {
  const relative = filePath.replace(/^.*\/pages\//, '');
  const segments = relative.split('/');
  if (segments.length <= 1)
    return null;
  return segments[0];
}

/**
 * 预加载所有页面的 meta（*.meta.ts 文件，无 JSX）
 * glob 模式与组件文件不同，不会触发 INEFFECTIVE_DYNAMIC_IMPORT 警告
 */
// 预加载所有页面的 meta（router/meta/**/*.meta.ts 文件，无 JSX）
const metaModules = import.meta.glob<{ default?: PageMeta & { icon?: string } }>(
  './meta/**/*.meta.ts',
  { eager: true },
);

// 页面组件（懒加载）- 只匹配 .tsx/.jsx，避免匹配 .meta.ts 文件
const pageModules = import.meta.glob<PageModule>(
  '../pages/**/*.{tsx,jsx}',
  { eager: false },
);

/**
 * 将 meta 模块的 filePath 映射到对应的页面组件 filePath
 * ../pages/torrent2magnet.meta.ts → ../pages/torrent2magnet.tsx
 */
function metaFilePathToPageFilePath(metaPath: string): string {
  // 从 router/meta/torrent2magnet.meta.ts 提取文件名
  // 映射到 ../pages/torrent2magnet.tsx
  const fileName = metaPath.replace(/^\.\/meta\/(.+)\.meta\.ts$/, '$1');
  // 查找对应的页面模块
  const candidates = [`../pages/${fileName}.tsx`, `../pages/${fileName}.ts`, `../pages/${fileName}.jsx`, `../pages/${fileName}.js`];
  for (const candidate of candidates) {
    if (candidate in pageModules) {
      return candidate;
    }
  }
  // 检查是否是目录下的 index
  const indexCandidates = [`../pages/${fileName}/index.tsx`, `../pages/${fileName}/index.ts`, `../pages/${fileName}/index.jsx`, `../pages/${fileName}/index.js`];
  for (const candidate of indexCandidates) {
    if (candidate in pageModules) {
      return candidate;
    }
  }
  return `../pages/${fileName}`;
}

/**
 * 从 config.titleMap 和 metaModules 构建一个统一的 meta 查找表
 */
function buildMetaLookup(): Map<string, PageMeta | undefined> {
  const lookup = new Map<string, PageMeta | undefined>();

  for (const [metaPath, mod] of Object.entries(metaModules)) {
    const pagePath = metaFilePathToPageFilePath(metaPath);
    const raw = mod?.default;
    if (raw) {
      lookup.set(pagePath, {
        title: raw.title,
        icon: resolveIcon(raw.icon as string),
        isActive: raw.isActive,
        hidden: raw.hidden,
        order: raw.order,
      });
    }
  }

  return lookup;
}

export function getAutoRouteMetas(): AutoRouteMeta[] {
  const { excludes } = config;
  const metaLookup = buildMetaLookup();

  const metas: AutoRouteMeta[] = [];

  for (const [filePath, importFn] of Object.entries(pageModules)) {
    if (isExcluded(filePath, excludes)) {
      continue;
    }
    if (isIndexFile(filePath)) {
      continue;
    }

    const routePath = filePathToRoutePath(filePath);
    const pageMeta = metaLookup.get(filePath);

    metas.push({
      filePath,
      path: routePath,
      title: deriveTitleFromFilePath(filePath),
      pageMeta,
      loader: importFn,
    });
  }

  metas.sort((a, b) => {
    const pathA = a.path;
    const pathB = b.path;
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

export function getRouteMenuItems(): NavMainItem[] {
  const metas = getAutoRouteMetas();

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
