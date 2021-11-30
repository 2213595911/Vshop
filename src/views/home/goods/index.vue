<template>
  <div class="goods-list clear">
    <item v-for="item in goods" :key="item.id" :item="item"></item>
  </div>
  <van-pagination v-model="currentPage" :total-items="goods.length" :items-per-page="2" :page-count="2" />
</template>

<script setup lang="ts">
import { ref, computed, ComputedRef, watch } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import Item from './Item.vue'
import type { goodsType } from '@/types/useHome'

const currentPage = ref(1)
watch(currentPage, v => {
  store.dispatch('home/getGoodsList', currentPage.value)
})
const store = useStore(key)
store.dispatch('home/getGoodsList', currentPage.value)
const goods = computed(() => {
  return store.state.home?.goodsList
}) as ComputedRef<goodsType[]>

console.log(goods.value)
</script>

<style scoped lang="scss">
.van-pagination {
  padding-bottom: 150px;
  margin-top: 40px;
}
.goods-list {
  padding: 10px;
  box-sizing: border-box;
}
</style>
