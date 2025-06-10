<template>
  <div class="tool-warp">
    <div class="title">
      种子转磁力链(torrent转magnet)
    </div>
    <v-row>
      <v-col :cols="6">
        <v-btn color="primary" prepend-icon="mdi-file-upload" variant="tonal" @click="triggerFileInput">
          选择Torrent文件
        </v-btn>

        <v-file-input
          ref="fileInput"
          v-model="selectedFiles"
          hide-details
          hide-input
          multiple
          style="display: none;"
          @change="handleFileChange"
        />
      </v-col>
    </v-row>

    <v-row v-if="selectedFiles && selectedFiles.length">
      <v-col :cols="5">
        <v-list>
          <v-list-item v-for="(file, index) in selectedFiles" :key="index">
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
      <v-col :cols="1">123</v-col>
      <v-col :cols="6">
        <v-list>
          <v-list-item v-for="(file, index) in selectedFiles" :key="index">
            <template #prepend>
              <v-btn
                :border="false"
                class="btn-mgr"
                icon="mdi-content-copy"
                size="x-small"
                @click="handleCopy(index)"
              />
            </template>
            <div>
              <v-list-item-title :title="file.name">{{ file.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ formatFileSize(file.size) }}</v-list-item-subtitle>
            </div>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

  </div>
</template>

<script setup lang='ts'>
  import type { VFileInput } from 'vuetify/components'
  import { ref } from 'vue'

  const emit = defineEmits(['files-selected'])
  const fileInput = ref<InstanceType<typeof VFileInput> | null>(null)

  const selectedFiles = ref<File[]>([])

  const triggerFileInput = () => {
    fileInput.value?.$el.querySelector('input[type="file"]').click()
  }

  const handleFileChange = () => {
    emit('files-selected', selectedFiles.value)
  }

  const removeFile = (index: number): void => {
    // 从选中文件列表中移除文件
    selectedFiles.value.splice(index, 1)
    emit('files-selected', selectedFiles.value)
  }

  const formatFileSize = (bytes: number): string => {
    // 格式化文件大小
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`
  }

  const handleCopy = (index: number) => {
    // 复制文件名到剪贴板
    const file = selectedFiles.value[index]
    if (file) {
      navigator.clipboard.writeText(file.name)
        .then(() => {
          console.log('文件名已复制到剪贴板')
        })
        .catch(err => {
          console.error('复制文件名到剪贴板时出错:', err)
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
}
</style>
