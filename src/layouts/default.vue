<template>
  <v-toolbar class="toolbar-style" scroll-behavior="elevate">
    <v-toolbar-title class="toolbar-title" @click="goHome">常用工具</v-toolbar-title>
    <template #append>
      <v-menu open-on-hover transition="scale-transition">
        <template #activator="{ props }">
          <v-btn class="btn-style" v-bind="props" @click="goHome">
            <v-icon icon="mdi-home" />主页
          </v-btn>
        </template>
      </v-menu>
      <v-divider class="mx-2 mg-auto" vertical />
      <v-menu open-on-hover transition="scale-transition">
        <template #activator="{ props }">
          <v-btn class="btn-style" v-bind="props">
            加解码<v-icon icon="mdi-chevron-down" />
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item v-for="(item, index) in items" :key="index" density="compact" @click="$router.push(item.path)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover transition="scale-transition">
        <template #activator="{ props }">
          <v-btn class="btn-style" v-bind="props">
            日常工具<v-icon icon="mdi-chevron-down" />
          </v-btn>
        </template>
        <v-list density="compact">
          <v-list-item
            v-for="(item, index) in daliyItems"
            :key="index"
            density="compact"
            @click="$router.push(item.path)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <v-divider class="mx-2 mg-auto" vertical /> -->
    </template>
  </v-toolbar>
  <v-main class="main-style" max-width="1200px" width="1200px">
    <v-container>
      <router-view />
    </v-container>
  </v-main>

</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const items = [
    {
      title: '种子转磁力链(torrent转magnet)',
      path: '/torrent2magnet',
    },
  ]
  const daliyItems = [
    {
      title: '日历',
      path: '/calendar',
    },
  ]

  const goHome = () => {
    router.push({ path: '/' })
  }
</script>

<style lang="scss" scoped>
.toolbar-style {
  background-color: #fff;

  .mg-auto {
    margin: auto;
    height: 16px;
  }
}

.btn-style {
  color: rgba(0, 0, 0, 0.6);
}

.main-style {
  margin: 0 auto;
}

.toolbar-title {
  flex: 0 0 auto;
  cursor: pointer;
}
</style>
