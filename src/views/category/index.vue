<template>
  <div class="category" v-if="category?.length">
    <!-- <tree-select-vue :category="category"></tree-select-vue> -->
    <van-tree-select v-model:active-id="activeId" height="85vh" v-model:main-active-index="activeIndex" :items="category">
      <template #content>
        <div class="content">
          <h2>{{ category[activeIndex].text }}</h2>
          <div class="container">
            <div class="item" v-for="item of category[activeIndex].child" :key="item.id">
              <img :src="item.icon" alt="" />
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </template>
    </van-tree-select>
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
  console.log(category.value)
})
// 测试数据
const activeId = ref(1)
const activeIndex = ref(0)
</script>
<style lang="scss" scoped>
.category {
  .van-sidebar {
    padding-bottom: 50px !important;
  }
  .content {
    h2 {
      font-size: 30px;
      text-align: center;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      padding-bottom: 50px !important;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
}
@media all and (min-width: 750px) {
  .item {
    margin: 3px !important;
  }
}
</style>
