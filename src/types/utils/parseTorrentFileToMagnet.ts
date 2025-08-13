import type { Buffer } from 'node:buffer'

export interface DecodedTorrentFile {
  path: Buffer[]
  length: number
}

export interface ParsedTorrentInfo {
  magnetLink: string
  totalSize: number // 以字节为单位
}

export interface DecodedTorrent {
  'announce': Buffer
  'announce-list'?: Buffer[][]
  'info': {
    name: Buffer
    length?: number
    files?: DecodedTorrentFile[]
  }
}
