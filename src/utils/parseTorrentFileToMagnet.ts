// parseTorrentFileToMagnet.ts

import type { DecodedTorrent, ParsedTorrentInfo } from '@/types'
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
 * 将 .torrent 文件内容解析为磁力链接和总文件大小
 * @param file Blob/File 对象
 * @returns Promise<ParsedTorrentInfo> 磁力链接和文件总大小
 */
async function parseTorrentFileToMagnet(file: File): Promise<ParsedTorrentInfo> {
  try {
    const torrentBuffer = await file.arrayBuffer()
    const decodedTorrent = bencode.decode(Buffer.from(torrentBuffer)) as DecodedTorrent

    const infoDict = decodedTorrent.info
    if (infoDict === null || infoDict === undefined) {
      throw new Error('无效的 torrent 文件：缺少 \'info\' 字典。')
    }
    const infoEncoded = bencode.encode(infoDict)

    const infoEncodedUint8Array = new Uint8Array(infoEncoded)
    const infoEncodedArrayBuffer = infoEncodedUint8Array.buffer.slice(
      infoEncodedUint8Array.byteOffset,
      infoEncodedUint8Array.byteOffset + infoEncodedUint8Array.byteLength,
    )
    const hashBuffer = await crypto.subtle.digest('SHA-1', infoEncodedArrayBuffer)
    const infoHash = arrayBufferToHex(hashBuffer)

    const displayName = (infoDict.name !== null && infoDict.name !== undefined)
      ? `&dn=${encodeURIComponent(infoDict.name.toString('utf8'))}`
      : ''

    let trackerUrl = ''
    if (decodedTorrent.announce !== null && decodedTorrent.announce !== undefined) {
      trackerUrl = `&tr=${encodeURIComponent(decodedTorrent.announce.toString('utf8'))}`
    } else if (decodedTorrent['announce-list'] && decodedTorrent['announce-list'].length > 0) {
      const firstTracker = decodedTorrent['announce-list'][0]?.[0]
      if (firstTracker instanceof Buffer && firstTracker.byteLength > 0) {
        trackerUrl = `&tr=${encodeURIComponent(firstTracker.toString('utf8'))}`
      }
    }

    const magnetLink = `magnet:?xt=urn:btih:${infoHash}${displayName}${trackerUrl}`

    // 计算文件总大小
    let totalSize = 0
    if (infoDict.files && infoDict.files.length > 0) {
      // 多个文件
      for (const f of infoDict.files) {
        totalSize += f.length
      }
    } else if (typeof infoDict.length === 'number' && infoDict.length >= 0) {
      // 单个文件
      totalSize = infoDict.length
    }

    return { magnetLink, totalSize }
  } catch (error: any) {
    throw new Error(`解析 ${file.name} 失败：${(error as Error).message || '文件内容解析错误'}`)
  }
}

export {
  parseTorrentFileToMagnet,
}
