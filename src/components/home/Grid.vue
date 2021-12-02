<template>
  <div class="grid">
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="(item, i) in nav" :key="i" @click="$router.push(item.path)" :icon="item.picture" :text="item.title" />
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { nav } from '@/utils/useHome'
</script>

<style scoped lang="scss"></style>
