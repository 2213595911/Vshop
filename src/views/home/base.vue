<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper-vue :banner="message"></swiper-vue>
    <!-- 宫格导航 -->
    <grid-vue></grid-vue>
  </div>
</template>

<script setup lang="ts">
import SwiperVue from '@/components/home/Swiper.vue'
import GridVue from '@/components/home/Grid.vue'
import { getBanner } from '@/api/useHome'

const { message } = await getBanner()
// console.log()
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
