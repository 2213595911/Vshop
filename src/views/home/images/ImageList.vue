<template>
  <div class="img-list">
    <template v-if="images.length">
      <div>
        <item v-for="item in images" :key="item.id" :item="item"></item>
      </div>
    </template>
    <template v-else>
      <van-empty description="暂无图片" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Item from './Item.vue'
import { useStore } from 'vuex'
import { key } from '@/store/index'
const store = useStore(key)
const images = computed(() => store.state.home?.images)!
</script>

<style scoped lang="scss">
.img-list {
  padding: 15px;
}
</style>
