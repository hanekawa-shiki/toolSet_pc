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
  import { ref } from 'vue'
  import { useSnackbarStore } from '@/stores/snackbarStore'
  import { parseTorrentFileToMagnet } from '@/utils'

  const snackbarStore = useSnackbarStore()

  const emit = defineEmits(['files-selected'])
  const fileInput = ref<InstanceType<typeof VFileInput> | null>(null)

  const torrentFiles = ref<File[]>([])
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
    magnetLinks.value.splice(index, 1)
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

  /** 处理选择的 .torrent 文件 */
  const handleFiles = async () => {
    magnetLinks.value = [] // 清空之前的磁力链
    for (const file of torrentFiles.value) {
      try {
        const magnetLink = await parseTorrentFileToMagnet(file)
        magnetLinks.value.push(magnetLink)
      } catch (error: any) {
        // 显示错误信息
        snackbarStore.showSnackbar({
          message: error.message,
          color: 'error',
        })
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
      snackbarStore.showSnackbar({
        message: '磁力链接已复制',
        color: 'success',
      })
    } catch {
      snackbarStore.showSnackbar({
        message: '复制失败，请手动复制',
        color: 'warning',
      })
    }
  }

  /** 复制所有 */
  const copyAll = async () => {
    if (magnetLinks.value.length === 0) return
    const allText = magnetLinks.value.join('\n')
    try {
      await navigator.clipboard.writeText(allText)
      snackbarStore.showSnackbar({
        message: '已复制全部磁力链接',
        color: 'success',
      })
    } catch {
      snackbarStore.showSnackbar({
        message: '复制失败，请手动复制',
        color: 'warning',
      })
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
