<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <n-layout class="layout">
    <n-layout-header class="header" bordered>
      header
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        class="sider" :native-scrollbar="false" collapse-mode="width" :collapsed-width="120" :width="240"
        show-trigger="arrow-circle" content-style="padding: 24px;" bordered
      >
        sider
      </n-layout-sider>
      <n-layout-content class="content" :native-scrollbar="false">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
}

.header {
  height: 64px;
}

.sider {
  height: calc(100vh - 64px);
  overflow: hidden;
}

.content {
  height: calc(100vh - 64px);
  overflow: hidden;
}
</style>
