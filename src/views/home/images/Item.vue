<template>
  <div class="item_img">
    <router-link
      :to="{
        name: 'imgDesc',
        query: { id: item?.id },
        params: { img_url: item?.img_url },
      }"
    >
      <img v-lazy="item?.img_url" :src="item?.img_url" alt="" />
      <div class="content">
        <h2 class="title">{{ item?.title }}</h2>
        <p class="desc ellipsis-2">{{ item?.zhaiyao }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { imgListType } from '@/types/useHome'
defineProps({
  item: {
    type: Object as PropType<imgListType>,
  },
})
</script>

<style scoped lang="scss">
.item_img {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  position: relative;
  margin: 30px 0;
  border-radius: 5px;
  overflow: hidden;
  @include imgShadow;
  img {
    width: 100%;
  }
  .content {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 180px;
    width: 100%;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    .title {
      font-size: 24px;
    }
    .desc {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
