<template>
  <div class="list">
    <van-checkbox v-model="checked"></van-checkbox>
    <van-card :num="value" centered :price="item?.sell_price" :title="item?.title" :thumb="item?.thumb_path">
      <template #footer>
        <van-button type="danger" size="mini" @click="delCartGoods(item?.id)">删除</van-button>
        <van-stepper v-model="value" @plus="addCou(item?.id)" @minus="reduceCou(item?.id)" />
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineProps, PropType } from 'vue'
import type { cartGoodsType } from '@/types/useCart'
import { useStore } from 'vuex'
import { key } from '@/store'
import { Toast } from 'vant'

const store = useStore(key)
const checked: Ref<boolean> = ref(true)
const { item } = defineProps({
  item: {
    type: Object as PropType<cartGoodsType>,
  },
})
const value: Ref<number> = ref(item?.cou!)

// 当点击添加商品数量之后
const addCou = (id: number | undefined): void => {
  store.commit('cart/changeGoodsNum', [id, value.value + 1])
}
// 当点击减少商品数量之后
const reduceCou = (id: number | undefined): void => {
  store.commit('cart/changeGoodsNum', [id, value.value - 1])
}
// 删除购物车中的商品
const delCartGoods = (id: number | undefined): void => {
  Toast.success('成功文案')
  store.commit('cart/delGoodsCart', id)
  store.dispatch('cart/getCartList')
}
</script>

<style scoped lang="scss">
.list {
  border-bottom: solid 1px #ccc;
  display: flex;
  .van-checkbox {
    margin-left: 10px;
  }
  &:last-of-type {
    border-bottom: none;
  }
  .van-card {
    flex: 1;
  }
}
</style>
