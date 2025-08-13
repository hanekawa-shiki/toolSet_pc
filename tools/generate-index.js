import * as fs from 'node:fs'
import * as path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// 获取当前模块的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 指定要扫描的根目录
const rootDir = path.resolve(__dirname, '../src/types')
const targetFile = path.join(rootDir, 'index.ts')

/**
 * 递归遍历目录，查找所有 .js 文件并生成导出语句。
 * @param {string} currentDir - 当前正在遍历的目录
 * @param {string} relativePath - 相对于 rootDir 的路径
 * @returns {string[]} 包含所有导出语句的字符串数组
 */
function getExports(currentDir, relativePath = '') {
  let exports = []
  try {
    const items = fs.readdirSync(currentDir)

    for (const item of items) {
      const itemPath = path.join(currentDir, item)
      const itemRelativePath = path.join(relativePath, item)
      const stat = fs.statSync(itemPath)

      if (stat.isDirectory()) {
        // 如果是目录，则递归进入
        exports = exports.concat(getExports(itemPath, itemRelativePath))
      } else if (stat.isFile() && item.endsWith('.ts') && item !== 'index.ts') {
        // 如果是 .js 文件且不是 index.js，则生成导出语句
        const importPath = `./${itemRelativePath.slice(0, -3).replace(/\\/g, '/')}`
        exports.push(`export * from '${importPath}';`)
      }
    }
  } catch (error) {
    console.error(`在处理目录 ${currentDir} 时出错：`, error)
  }

  return exports
}

try {
  // 确保 types 目录存在
  if (!fs.existsSync(rootDir)) {
    console.error(`错误：指定的目录 "${rootDir}" 不存在。`)
    process.exit(1)
  }

  const exportStatements = getExports(rootDir)
  const header = `// 此文件由脚本自动生成，请勿手动修改\n\n`
  const content = header + exportStatements.join('\n')

  // 写入或更新 index.ts 文件
  fs.writeFileSync(targetFile, content, 'utf8')

  console.warn(`index.ts 文件已成功生成在 ${targetFile}。`)
} catch (error) {
  console.error('生成 index.ts 文件时发生错误:', error)
  process.exit(1)
}
