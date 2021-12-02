<template>
  <div class="list">
    <van-checkbox v-model="checked" @change="changeState(item?.id)"></van-checkbox>
    <van-card :num="value" centered :price="item?.sell_price" :title="item?.title" :thumb="item?.thumb_path" @click-thumb="link(item.id)">
      <template #footer>
        <van-button type="danger" size="mini" @click="delCartGoods(item?.id)">删除</van-button>
        <van-stepper v-model="value" @plus="addCou(item?.id)" @minus="reduceCou(item?.id)" />
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, defineProps, PropType, computed } from 'vue'
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
// const checked = ref(item?.done)
const checked = computed({
  get() {
    return props.item?.done
  },
  set(v) {
    store.commit('cart/changeSelected', { id: props.item?.id, done: v })
    store.dispatch('cart/getCartList')
  },
})

const changeState = (id: number | undefined): void => {
  console.log(id)
}
// 当点击添加商品数量之后
const addCou = (id: number | undefined): void => {
  store.commit('cart/changeGoodsNum', [id, 1])
}
// 当点击减少商品数量之后
const reduceCou = (id: number | undefined): void => {
  store.commit('cart/changeGoodsNum', [id, -1])
}
// 删除购物车中的商品
const delCartGoods = (id: number | undefined): void => {
  Toast.success('删除成功!')
  store.commit('cart/delGoodsCart', id)
  store.dispatch('cart/getCartList')
}
// 点击图片的时候跳转
const link = (id: number) => {
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
