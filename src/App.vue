<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: '"LXGW WenKai Screen", "PingFang SC", "Microsoft YaHei", sans-serif',
    fontWeight: 'normal',
  },
}
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider placement="bottom-right">
        <n-notification-provider>
          <n-modal-provider>
            <n-dialog-provider>
              <RouterView />
            </n-dialog-provider>
          </n-modal-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped></style>
