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
    '404.tsx',
  ],

  // 默认布局组件
  layoutPath: 'layout',

  // 页面级菜单配置（key 为路由路径，如 '/calendar'）
  pageMeta: {
    '/calendar': {
      title: '万年历',
      icon: 'Calendar',
    },
    '/transform/torrent2magnet': {
      title: '种子转磁力链',
      icon: 'Magnet',
    },
  },

  // 目录级（父级）菜单配置（key 为 pages/ 下的目录名）
  dirMeta: {
    transform: {
      title: '开发工具',
      icon: 'Wrench',
      isActive: true,
    },
  },

  // 自定义路由（优先级高于自动生成的路由）
  customRoutes: [],
};

export default config;
