<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const images = ref(['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'])
</script>

<style scoped lang="scss">
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
