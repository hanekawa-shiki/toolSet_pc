<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <n-layout
    class="layout"
    has-sider
  >
    <n-layout-sider
      class="sider"
      :native-scrollbar="false"
      collapse-mode="width"
      :width="240"
      bordered
      :collapsed-width="120"
      show-trigger="arrow-circle"
    >
      <div class="logo">
        logo
      </div>
    </n-layout-sider>
    <n-layout-content
      class="content"
      :native-scrollbar="false"
    >
      <n-layout-header
        bordered
        class="header"
      >
        header
      </n-layout-header>
      <RouterView />
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
  position: relative;
}

.header {
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
}

.sider {
  height: 100%;
  .logo {
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 24px;
  }
}

.content {
  height: 100%;
}
</style>
