<template>
  <div class="tool-warp">
    <div class="title">
      种子转磁力链(torrent转magnet)
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-btn color="primary" prepend-icon="mdi-file-upload" variant="tonal" @click="triggerFileInput">
            选择Torrent文件
          </v-btn>
        </v-col>
      </v-row>

      <v-row v-if="torrentFiles && torrentFiles.length > 0">
        <v-col>
          <v-list>
            <v-list-item v-for="(file, index) in torrentFiles" :key="index">
              <template #prepend>
                <v-btn
                  :border="false"
                  class="btn-mgr"
                  icon="mdi-close"
                  size="x-small"
                  @click="removeFile(index)"
                />
              </template>
              <div>
                <v-list-item-title :title="file.name">{{ file.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ formatFileSize(file.size) }}</v-list-item-subtitle>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col align-self="center" class="mid-col"><v-icon icon="mdi-file-document-arrow-right-outline" /></v-col>
        <v-col>
          <v-list>
            <v-list-item v-for="(file, index) in magnetLinks" :key="index">
              <template #prepend>
                <v-btn
                  :border="false"
                  class="btn-mgr"
                  icon="mdi-content-copy"
                  size="x-small"
                  @click="handleCopy(file)"
                />
              </template>
              <div>
                <v-list-item-title :title="file">{{ file }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row v-if="torrentFiles && torrentFiles.length > 0">
        <v-col align="end">
          <v-btn color="primary" @click="copyAll">
            复制所有磁力链
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-file-input
      ref="fileInput"
      v-model="torrentFiles"
      accept=".torrent"
      hide-details
      hide-input
      multiple
      style="display: none;"
      @change="handleFileChange"
    />
  </div>
</template>

<script setup lang='ts'>
  import type { VFileInput } from 'vuetify/components'
  import bencode from 'bencode'
  import { ref } from 'vue'

  const emit = defineEmits(['files-selected'])
  const fileInput = ref<InstanceType<typeof VFileInput> | null>(null)

  const torrentFiles = ref<File[]>([])
  // 存储生成的磁力链接列表
  const magnetLinks = ref<string[]>([])

  const triggerFileInput = () => {
    fileInput.value?.$el.querySelector('input[type="file"]').click()
  }

  const handleFileChange = () => {
    emit('files-selected', torrentFiles.value)
    handleFiles()
  }

  const removeFile = (index: number): void => {
    // 从选中文件列表中移除文件
    torrentFiles.value.splice(index, 1)
    magnetLinks.value.splice(index, 1) // 也要移除对应的磁力链
    emit('files-selected', torrentFiles.value)
  }

  const formatFileSize = (bytes: number): string => {
    // 格式化文件大小
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`
  }

  /**
   * 将 ArrayBuffer 转换为十六进制字符串
   * @param buffer ArrayBuffer
   * @returns 十六进制字符串
   */
  const arrayBufferToHex = (buffer: ArrayBuffer): string => {
    return Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  }

  /**
   * 将 .torrent 文件内容解析为磁力链接
   * @param file Blob/File 对象
   * @returns Promise<string> 磁力链接
   */
  const parseTorrentFileToMagnet = async (file: File): Promise<string> => { // 注意这里函数声明也变成了 async
    try {
      // 直接使用 Blob#arrayBuffer() 方法，它返回一个 Promise
      const torrentBuffer = await file.arrayBuffer() // <--- 替换为这一行

      // 1. 使用 bencode 库解码 torrent 文件内容
      const decodedTorrent = bencode.decode(Buffer.from(torrentBuffer))

      // 2. 获取 info 字典的原始 Bencode 编码
      const infoDict = decodedTorrent.info
      if (!infoDict) {
        throw new Error('无效的 torrent 文件：缺少 \'info\' 字典。') // 直接抛出错误
      }
      const infoEncoded = bencode.encode(infoDict)

      // 3. 计算 info hash (SHA-1)
      const hashBuffer = await crypto.subtle.digest('SHA-1', infoEncoded)
      const infoHash = arrayBufferToHex(hashBuffer)

      // 4. 构建 Magnet 链接
      const displayName = infoDict.name ? `&dn=${encodeURIComponent(infoDict.name.toString())}` : ''
      let trackerUrl = ''
      if (decodedTorrent.announce) {
        trackerUrl = `&tr=${encodeURIComponent(decodedTorrent.announce.toString())}`
      } else if (decodedTorrent['announce-list'] && decodedTorrent['announce-list'].length > 0) {
        const firstTracker = decodedTorrent['announce-list'][0][0]
        if (firstTracker) {
          trackerUrl = `&tr=${encodeURIComponent(firstTracker.toString())}`
        }
      }

      const magnetLink = `magnet:?xt=urn:btih:${infoHash}${displayName}${trackerUrl}`
      return magnetLink // 直接返回结果
    } catch (error: any) {
      console.error(`解析文件 ${file.name} 失败:`, error)
      throw new Error(`解析 ${file.name} 失败：${error.message || '文件内容解析错误'}`) // 抛出错误以供外部 catch 捕获
    }
  }

  /** 处理选择的 .torrent 文件 */
  const handleFiles = async () => {
    magnetLinks.value = [] // 清空之前的磁力链
    for (const file of torrentFiles.value) {
      try {
        const magnetLink = await parseTorrentFileToMagnet(file)
        magnetLinks.value.push(magnetLink)
      } catch (error: any) {
        // 在 UI 中显示错误信息
        alert(error.message)
        // 同时从 torrentFiles 列表中移除处理失败的文件
        const index = torrentFiles.value.indexOf(file)
        if (index !== -1) {
          torrentFiles.value.splice(index, 1)
        }
      }
    }
  }

  /** 复制单条 */
  const handleCopy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link)
      alert('磁力链接已复制')
    } catch {
      alert('复制失败，请手动复制')
    }
  }

  /** 复制所有 */
  const copyAll = async () => {
    if (magnetLinks.value.length === 0) return
    const allText = magnetLinks.value.join('\n')
    try {
      await navigator.clipboard.writeText(allText)
      alert('已复制全部磁力链接')
    } catch {
      alert('复制失败，请手动复制')
    }
  }

</script>

<style lang="scss" scoped>
.v-list-item {
  margin-bottom: 4px;
}

.tool-warp {
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .btn-mgr {
    margin-right: 10px;
  }

  .mid-col {
    width: 60px;
    flex: 0 0 auto;
  }
}
</style>
