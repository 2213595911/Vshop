<template>
  <div class="self">
    <!-- 头像 -->
    <avatar-vue></avatar-vue>
    <!-- 功能分类 -->
    <van-cell v-for="(link, index) in links" :key="index" :title="link.title" @click="changeOrder(link)" is-link />
  </div>
</template>

<script setup lang="ts">
import AvatarVue from './Avatar.vue'
import { reactive } from 'vue'
import type { orderType } from '@/types/usePersonal'
import { useRouter } from 'vue-router'
const router = useRouter()

const links: orderType[] = reactive([
  {
    title: '我的订单',
    path: '/personal/order',
  },
  {
    title: '我的地址',
    path: '/personal/address',
  },
  {
    title: '帮助中心',
    path: '/personal/help',
  },
])

const changeOrder = (link: orderType): void => {
  router.push({
    path: link.path,
    query: { title: link.title },
  })
}
</script>

<style scoped></style>
