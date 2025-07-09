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
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
