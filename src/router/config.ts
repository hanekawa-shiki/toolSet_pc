const config: RouterConfig = {
  // 扫描的页面目录
  pagesDir: 'pages',

  // 排除的文件/文件夹模式
  excludes: [
    '**/_*',
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.d.ts',
    '**/components/**',
    '**/utils/**',
    '**/hooks/**',
  ],

  // 默认布局组件
  layoutPath: 'layout',

  // 菜单标题映射（路径或目录名 → 中文名称）
  // 用于覆盖自动生成的英文标题，支持两种 key：
  // - 路由路径（如 '/home/home'）→ 覆盖该页面的菜单标题
  // - 目录名（如 'home'）→ 覆盖该文件夹的菜单组标题
  titleMap: {
    // 文件夹菜单组标题（按目录名）
    'home': '首页',
    // 子页面标题（按路由路径）
    '/home/home': '首页',
    // 顶级页面标题（按路由路径）
    '/about': '关于',
  },

  // 自定义路由（优先级高于自动生成的路由）
  customRoutes: [],
};

export default config;
