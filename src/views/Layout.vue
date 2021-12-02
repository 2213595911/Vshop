<template>
  <main>
    <!-- 顶部通栏 -->
    <top-nav-vue></top-nav-vue>
    <!-- 内容展示区域 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <bottom-nav-vue></bottom-nav-vue>
  </main>
</template>

<script setup lang="ts">
import TopNavVue from '@/components/layout/TopNav.vue'
import BottomNavVue from '@/components/layout/BottomNav.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

const route = useRoute()
const store = useStore(key)
// 监视路径变化修改头部通栏
watch(
  () => route.path,
  v => {
    const flag = v === '/' ? false : true
    store.commit('home/changeState', flag)
    store.commit('home/changeTitle', route.meta.title)
  }
)
</script>
