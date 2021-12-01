<template>
  <div class="cart">
    <div class="cart-list" v-if="cartList?.length">
      <cart-vue v-for="item in cartList" :key="item.id" :item="item"></cart-vue>
    </div>
    <van-empty v-else description="您的购物车空空如也" />
    <div class="Settlement">
      <count-vue></count-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartVue from './Cart.vue'
import CountVue from './Count.vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { computed, ComputedRef } from 'vue'
import type { cartGoodsType } from '@/types/useCart'

const store = useStore(key)
store.dispatch('cart/getCartList')
const cartList: ComputedRef<cartGoodsType[] | undefined> = computed(() => store.state.cart?.cart.goodsDesc)
</script>

<style scoped lang="scss">
.cart {
  padding: 10px;
  &-list {
    background: $color_white;
    border-radius: 5px;
    overflow: hidden;
    @include imgShadow;
  }
}
</style>
