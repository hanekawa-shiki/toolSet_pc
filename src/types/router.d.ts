/**
 * 路由配置接口
 */
interface RouterConfig {
  /**
   * 排除的文件/文件夹模式（glob 模式）
   * 默认排除以 _ 开头的文件和文件夹
   */
  excludes: string[];

  /**
   * 页面目录路径（相对于 src）
   */
  pagesDir: string;

  /**
   * 默认布局组件路径（相对于 src）
   * 设置后所有页面路由将作为该布局的子路由
   */
  layoutPath?: string;

  /**
   * 自定义路由配置，会与自动生成的路由合并
   */
  customRoutes?: import('react-router').RouteObject[];

  /**
   * 菜单标题映射（路径或目录名 → 中文名称）
   * 用于覆盖自动生成的英文标题
   * 支持两种 key：
   * - 路由路径（如 '/home'）→ 覆盖该页面的菜单标题
   * - 目录名（如 'home'）→ 覆盖该文件夹的菜单组标题
   */
  titleMap?: Record<string, string>;
}

/**
 * 页面模块的默认导出类型
 */
interface PageModule {
  default: import('react').ComponentType;
}

/**
 * 页面可选导出的元数据接口
 * 在页面文件中 export const meta = { title: 'xxx', icon: ... } 即可覆盖默认值
 */
interface PageMeta {
  /** 显示在侧边栏的标题 */
  title?: string;
  /** 侧边栏图标（React 节点） */
  icon?: import('react').ReactNode;
  /** 是否默认展开子菜单 */
  isActive?: boolean;
  /** 是否在侧边栏中隐藏此页面 */
  hidden?: boolean;
  /** 排序权重，数字越小越靠前 */
  order?: number;
}

/**
 * 自动生成的路由元数据
 */
interface AutoRouteMeta {
  /** 文件原始路径（如 ../pages/home.tsx） */
  filePath: string;
  /** 路由路径（如 /home） */
  path: string;
  /** 从文件名派生的标题（如 Home） */
  title: string;
  /** 页面元数据（可选，来自页面导出的 meta） */
  pageMeta?: PageMeta;
  /** 动态导入函数 */
  loader: () => Promise<PageModule>;
}
