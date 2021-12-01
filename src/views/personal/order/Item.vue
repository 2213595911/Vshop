<template>
  <van-swipe-cell v-for="goods in item" :key="goods.id">
    <van-card :num="goods.cou" :price="goods.sell_price" :title="goods.title" class="goods-card" :thumb="goods.thumb_path" />
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
  <div class="pay">
    <span>总价格:<strong class="count">￥123</strong></span>
    <van-button size="small" type="primary">立即支付</van-button>
  </div>
  <div class="deleteOrder">
    <a href="javascript:;" @click="deleteOrder">删除订单</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { cartGoodsType } from '@/types/useCart'
import type { userType } from '@/types/usePersonal'
import { Toast, Dialog } from 'vant'
import { getData, setData } from '@/utils/useLocal'

const { index } = defineProps({
  item: {
    type: Object as PropType<cartGoodsType[]>,
  },
  index: {
    type: Number,
  },
})

// 删除订单
const deleteOrder = (): void => {
  Dialog.confirm({
    title: '提示',
    message: '您确定删除整个订单吗?',
    confirmButtonColor: 'rgb(39, 162, 255)',
  })
    .then(() => {
      // on confirm
      const userInfo: userType = getData('userInfo')
      userInfo.orders.splice(index!, 1)
      setData('userInfo', userInfo)
    })
    .catch(() => {
      // on cancel
      Toast('已取消删除')
    })
}
</script>

<style scoped lang="scss">
.pay {
  margin-top: 10px;
  float: right;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 10px;
    font-size: 28px;
    .count {
      font-size: 35px;
      color: $color_red;
    }
  }
}
.deleteOrder {
  float: left;
  margin-top: 25px;
  text-decoration: none;
  font-size: 28px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  a {
    color: $color_title;
  }
}
</style>
