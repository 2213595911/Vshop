<template>
  <div class="cart">
    <div class="cart-list">
      <cart-vue></cart-vue>
      <cart-vue></cart-vue>
    </div>
    <div class="Settlement">
      <count-vue></count-vue>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartVue from './Cart.vue'
import CountVue from './Count.vue'
</script>

<style scoped lang="scss">
.cart {
  padding: 10px;
  &-list {
    background: $color_white;
    border-radius: 5px;
    overflow: hidden;
    @include shadow;
  }
}
</style>
