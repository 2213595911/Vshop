<template>
  <div class="img-list">
    <template v-if="images.length">
      <item v-for="item in images" :key="item.id" :item="item"></item>
    </template>
    <template v-else>
      <van-empty description="暂无图片" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import Item from './Item.vue'
import { useStore } from 'vuex'
import { key } from '@/store/index'
import { imgListType } from '@/types/useHome'
const store = useStore(key)
const images: ComputedRef<imgListType[]> = computed(() => store.state.home?.images as imgListType[])
</script>

<style scoped lang="scss">
.img-list {
  padding: 15px;
}
</style>
