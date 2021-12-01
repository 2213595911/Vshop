<template>
  <div>
    <van-submit-bar :price="countPrice" :button-text="`提交订单(${count})`" @submit="onSubmit" :decimal-length="2">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip> 总计不包含运费</template>
    </van-submit-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

const store = useStore(key)
const onSubmit = (): void => {}
const checked = computed({
  get() {
    return store.state.cart?.cart.all
  },
  set(v) {
    store.commit('cart/allSelected', v)
  },
})
// 总价格
const countPrice = computed(() => store.state.cart?.cart.goodsDesc.filter(item => item.done).reduce((p, c) => (p += c.sell_price * c.cou), 0) * 100)
// 总数量
const count = computed(() => store.state.cart?.cart.goodsDesc.reduce((p, c) => p + c.cou, 0))
</script>

<style scoped></style>
