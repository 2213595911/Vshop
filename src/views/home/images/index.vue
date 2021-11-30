<template>
  <div class="images">
    <van-tabs v-model:active="active" color="#50a0f8">
      <van-tab
        v-for="cate in imgCate"
        :key="cate.id"
        :title="cate.title"
        :to="{
          path: `/images/${cate.id}`,
        }"
      ></van-tab>
    </van-tabs>
    <!-- 切换显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { getImgCategory } from '@/api/useHome'
import { ref, computed, ComputedRef, watch } from 'vue'
import type { imgCateType, imgListType } from '@/types/useHome'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store/index'

const active = ref(0)
const route = useRoute()
const store = useStore(key)
const data = await getImgCategory()

const imgCate: ComputedRef<imgCateType[]> = computed(() => {
  data.message.unshift({
    title: '全部',
    id: 1,
  })
  return data.message
})
watch(
  () => route.params.id,
  (v: any) => {
    if (route.params.id) {
      let id: number = v - 0
      if (id === 1) id = 0
      store.dispatch('home/getImg', id)
      const index = imgCate.value.findIndex((item: any) => {
        return item.id === v * 1
      })
      active.value = index
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.images {
  padding-bottom: 100px;
}
</style>
