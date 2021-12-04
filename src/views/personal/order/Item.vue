<template>
  <div class="item">
    <h2 class="orderNum">订单号:{{ 48656164657229 + '2021' + props.index }}</h2>
    <van-swipe-cell>
      <van-card
        v-for="goods in item"
        :key="goods.id"
        :num="goods.cou"
        :price="goods.sell_price"
        :title="goods.title"
        class="goods-card"
        :thumb="goods.thumb_path"
        @click-thumb="$router.push(`/goods/${goods.id}`)"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="del(goods.id)" />
      </template>
    </van-swipe-cell>
    <div class="payStatus">
      <span class="payGoods" v-if="payStatus">已支付</span>
      <span class="depay" v-else>待支付</span>
    </div>
    <div class="pay">
      <span
        >总价格:<strong class="count">￥{{ count }}</strong></span
      >
      <van-button size="small" type="primary" @click="pay">立即支付</van-button>
    </div>
    <div class="deleteOrder">
      <a href="javascript:;" @click="deleteOrder">删除订单</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed, ref } from 'vue'
import type { cartGoodsType } from '@/types/useCart'
import { Toast, Dialog } from 'vant'
import { useStore } from 'vuex'
import { key } from '@/store'

const store = useStore(key)
const props = defineProps({
  item: {
    type: Object as PropType<cartGoodsType[]>,
  },
  index: {
    type: Number,
  },
})
// 支付状态
const payStatus = computed(() => {
  return store.state.personal?.userInfo.orders[props.index!].every(item => item.pay)
})
// 总价格
const count = computed(() => {
  return props.item?.reduce((p, c) => p + c.sell_price * c.cou, 0)
})
// 删除订单
const deleteOrder = (): void => {
  Dialog.confirm({
    title: '提示',
    message: '您确定删除整个订单吗?',
    confirmButtonColor: 'rgb(39, 162, 255)',
  })
    .then(() => {
      store.commit('personal/deleteOrder', props.index)
    })
    .catch(() => {
      Toast('已取消删除')
    })
}
// 删除订单中单独的商品
const del = (id: number): void => {
  console.log(id)

  store.commit('personal/del', [props.index, id])
}
// 支付
const pay = (): void => {
  let flag: any = ref()
  new Promise(resolve => {
    if (payStatus.value) {
      return
    }
    flag = Toast.loading({
      message: '支付中请稍等...',
      forbidClick: true,
    })
    setTimeout(() => {
      resolve(props.index)
    }, 1000)
  }).then((index: any) => {
    flag.clear()
    store.commit('personal/pay', index)
    Toast.success('支付成功！')
  })
}
</script>

<style scoped lang="scss">
.orderNum {
  font-size: 28px;
  margin: 0;
  margin-left: 20px;
}
.payStatus {
  font-size: 30px;
  text-align: right;
  margin-right: 15px;
  .payGoods {
    color: #2ecc71;
  }
  .depay {
    color: #e74c3c;
  }
}
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
