<template>
  <div class="list">
    <van-checkbox v-model="checked" @change="changeState(item?.id)"></van-checkbox>
    <van-card :num="value" centered :price="item?.sell_price" :title="item?.title" :thumb="item?.thumb_path" @click-thumb="link(item?.id)">
      <template #footer>
        <van-button type="danger" size="mini" @click="delCartGoods(item?.id)">删除</van-button>
        <van-stepper max="99" v-model="value" @change="changeNum" />
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineProps, PropType, computed, watch } from 'vue'
import type { cartGoodsType } from '@/types/useCart'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { key } from '@/store'
import { Toast } from 'vant'

const router = useRouter()
const store = useStore(key)

const props = defineProps({
  item: {
    type: Object as PropType<cartGoodsType>,
  },
})

// 控制数量
const value: Ref<number> = ref(props.item?.cou as number)
// 复选框状态
const checked = computed({
  get(): boolean {
    return store.state.cart?.cart.goodsDesc.find(item => item.id === props.item?.id)?.done!
  },
  set(value) {
    store.commit('cart/changeSelected', [props.item?.id, value])
  },
})

const changeState = (id: number | undefined): void => {
  console.log(id)
}
// 当步进器发生变化时
const changeNum = (value: number): void => {
  store.commit('cart/changeGoodsNum', [props.item?.id, value])
}
// 删除购物车中的商品
const delCartGoods = (id: number | undefined): void => {
  Toast.success('删除成功!')
  store.commit('cart/delGoodsCart', id)
  store.dispatch('cart/getCartList')
}
// 点击图片的时候跳转
const link = (id: number | undefined) => {
  router.push(`/goods/${id}`)
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
