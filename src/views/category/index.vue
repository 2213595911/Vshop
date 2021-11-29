<template>
  <div class="category">
    <van-tree-select v-model:main-active-index="activeIndex" height="55vw" :items="items">
      <template #content>
        <h2 v-if="activeIndex === 0">后盾人1</h2>
        <h2 v-else-if="activeIndex === 1">后盾人2</h2>
      </template>
    </van-tree-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref(0)
const items = ref([{ text: '分组 1' }, { text: '分组 2' }])
</script>

<style scoped></style>
