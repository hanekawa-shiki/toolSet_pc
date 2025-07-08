<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>top-nav</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          sider
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          <RouterView />
        </n-layout-content>
      </n-layout>
      <n-layout-footer>footer</n-layout-footer>
    </n-layout>
  </n-space>

</template>

<script setup lang="ts">
  defineOptions({
    name: 'DefaultLayout'
  })
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
