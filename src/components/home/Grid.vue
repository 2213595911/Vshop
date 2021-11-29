<template>
  <div class="grid">
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="(item, i) in 6" :key="i" @click="change(i)" icon="photo-o" :text="'' + item" />
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const change = (i: number): void => {
  switch (i) {
    case 0:
      router.push('/news')
      break
    case 1:
      router.push('/images')
      break
    case 2:
      router.push('/goods')
      break
  }
}
</script>

<style scoped></style>
