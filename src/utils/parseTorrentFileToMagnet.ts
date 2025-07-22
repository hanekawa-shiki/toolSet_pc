import type { DecodedTorrent } from '@/types'
import { Buffer } from 'node:buffer'

import bencode from 'bencode'
/**
 * 将 ArrayBuffer 转换为十六进制字符串
 * @param buffer ArrayBuffer
 * @returns 十六进制字符串
 */
function arrayBufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * 将 .torrent 文件内容解析为磁力链接
 * @param file Blob/File 对象
 * @returns Promise<string> 磁力链接
 */
async function parseTorrentFileToMagnet(file: File): Promise<string> {
  try {
    // 1. 将文件转换为 ArrayBuffer
    const torrentBuffer = await file.arrayBuffer()

    // 1. 使用 bencode 库解码 torrent 文件内容
    // 强制转换为 DecodedTorrent 类型
    const decodedTorrent = bencode.decode(Buffer.from(torrentBuffer)) as DecodedTorrent

    // 2. 获取 info 字典的原始 Bencode 编码
    const infoDict = decodedTorrent.info
    if (!infoDict) {
      throw new Error('无效的 torrent 文件：缺少 \'info\' 字典。')
    }
    const infoEncoded = bencode.encode(infoDict)

    // 3. 计算 info hash (SHA-1)
    const hashBuffer = await crypto.subtle.digest('SHA-1', infoEncoded)
    const infoHash = arrayBufferToHex(hashBuffer)

    // 4. 构建 Magnet 链接
    // 确保属性存在且是 Buffer 类型，并转换为字符串
    const displayName = infoDict.name
      ? `&dn=${encodeURIComponent(infoDict.name.toString('utf8'))}` // 明确指定编码
      : ''

    let trackerUrl = ''
    if (decodedTorrent.announce) {
      trackerUrl = `&tr=${encodeURIComponent(decodedTorrent.announce.toString('utf8'))}`
    } else if (decodedTorrent['announce-list'] && decodedTorrent['announce-list'].length > 0) {
      const firstTracker = decodedTorrent['announce-list'][0]?.[0] // 使用可选链操作符
      if (firstTracker instanceof Buffer && firstTracker.byteLength > 0) {
        trackerUrl = `&tr=${encodeURIComponent(firstTracker.toString('utf8'))}`
      }
    }

    const magnetLink = `magnet:?xt=urn:btih:${infoHash}${displayName}${trackerUrl}`
    return magnetLink
  } catch (error: any) {
    // 对 error 进行类型断言，或者检查其是否为 Error 实例
    throw new Error(`解析 ${file.name} 失败：${(error as Error).message || '文件内容解析错误'}`)
  }
}

export {
  parseTorrentFileToMagnet,
}
