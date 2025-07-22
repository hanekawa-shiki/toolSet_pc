import type { Buffer } from 'node:buffer'

export interface DecodedTorrent {
  'info'?: { // <--- 这里添加了问号
    'name'?: Buffer
    'piece length'?: number
    'pieces'?: Buffer
    'files'?: Array<{
      length: number
      path: Buffer[]
    }>
  }
  'announce'?: Buffer
  'announce-list'?: Buffer[][]
}
