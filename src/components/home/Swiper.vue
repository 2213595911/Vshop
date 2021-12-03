<template>
  <div class="swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in banner" :key="image.id">
        <a :href="image.url">
          <img :src="image.img" :alt="image.url" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { bannerType } from '@/types/useHome'

defineProps({
  banner: {
    type: Object as PropType<bannerType[]>,
    default: () => ({}),
  },
})
</script>

<style scoped lang="scss">
.swiper {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
