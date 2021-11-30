<template>
  <div class="item">
    <router-link
      :to="{
        name: 'goodsDesc',
        params: { id: item?.id, img: item?.img_url },
      }"
    >
      <img v-lazy="item?.img_url" :src="item?.img_url" alt="" />
    </router-link>
    <h2 class="title ellipsis-2">{{ item?.title }}</h2>
    <div class="price">
      <span class="market">￥{{ item?.market_price }}</span>
      <span class="sell">￥{{ item?.sell_price }}</span>
    </div>
    <div class="desc">
      <span class="hot">热卖中</span>
      <span class="inventory">剩余{{ item?.stock_quantity }}件</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { goodsType } from '@/types/useHome'
defineProps({
  item: {
    type: Object as PropType<goodsType>,
  },
})
</script>

<style scoped lang="scss">
.item {
  width: 48%;
  padding: 10px;
  margin: 10px 0;
  float: left;
  box-sizing: border-box;
  background: $color_white;
  border-radius: 10px;
  @include imgShadow;
  &:nth-of-type(even) {
    margin-left: 20px;
  }
  &:nth-of-type(odd) {
    margin-left: 5px;
  }
  img {
    width: 100%;
  }
  .title {
    font-size: 25px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
  .price {
    margin-top: 10px;
    .market {
      color: $color_red;
      font-weight: 700;
      font-size: 23px;
    }
    .sell {
      text-decoration: $text-delete;
      margin-left: 10px;
      color: $color_a;
      font-size: 12px;
    }
  }
  .desc {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $color_a;
    font-size: 12px;
  }
}
</style>
