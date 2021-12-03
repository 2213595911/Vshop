<template>
  <div class="category" v-if="category?.length">
    <tree-select-vue :category="category"></tree-select-vue>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import { getCate } from '@/api/useCate'
import { recursion } from '@/utils/useCate'
import type { CateType } from '@/types/useCate'
import TreeSelectVue from '@/components/category/TreeSelect.vue'

const category: Ref<CateType[] | undefined> = ref()

// 获取后台数据
getCate().then(value => {
  category.value = recursion(value.data)
})
</script>
