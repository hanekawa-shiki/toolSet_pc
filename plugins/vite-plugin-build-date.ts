import type { Plugin } from 'vite'

// 格式化时间的函数
function formatISODateToLocale(isoString: string): string {
  const date = new Date(isoString)
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // 使用当前系统的时区
  })
  return formatter.format(date)
}

// Vite 插件
export function buildDatePlugin(): Plugin {
  return {
    name: 'vite:build-date',
    // transformIndexHtml 钩子会在处理 index.html 文件时被调用
    transformIndexHtml(html: string): string {
      const buildDateISO = new Date().toISOString()
      const formattedDate = formatISODateToLocale(buildDateISO)

      const metaTag = `<meta name="build-date" content="${formattedDate}">`

      // 在 </head> 标签之前插入 meta 标签
      return html.replace('</head>', `  ${metaTag}\n</head>`)
    },
  }
}
