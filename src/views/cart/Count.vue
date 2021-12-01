<template>
  <div>
    <van-submit-bar :price="countPrice" :button-text="`提交订单(${count})`" @submit="onSubmit" :decimal-length="2">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip> 总计不包含运费</template>
    </van-submit-bar>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'
import type { cartGoodsType } from '@/types/useCart'
import type { userType } from '@/types/usePersonal'
import { countPrice, count } from '@/utils/useCart'
import { getData } from '@/utils/useLocal'

const router = useRouter()
const store = useStore(key)
const checked = computed({
  get(): boolean {
    return store.state.cart?.cart.all!
  },
  set(v) {
    store.commit('cart/allSelected', v)
  },
})
// 提交订单
const onSubmit = (): void => {
  const isLogin = computed(() => store.state.personal?.isLogin)
  if (isLogin.value) {
    console.log('跳转到支付页面')
    let flag: any = null
    new Promise(resolve => {
      flag = Toast.loading({
        message: '正在跳转订单支付页面...',
        forbidClick: true,
      })
      setTimeout(() => {
        // 获取购物车里的商品列表信息
        const cartGoodsList: ComputedRef<cartGoodsType[]> = computed(() => {
          return store.state.cart?.cart.goodsDesc!
        })
        // 获取localStorage存储的用户信息
        const userInfo: userType = getData('userInfo')
        const valid = userInfo.orders.every((item, i) => {
          const flag = item.every((item, index) => item.id === cartGoodsList.value[index].id)
          if (flag) {
            userInfo.orders[i] = cartGoodsList.value
          }
          return resolve(userInfo)
        })
        console.log(valid)
        userInfo.orders.push(cartGoodsList.value)
        resolve(userInfo)
      }, 1000)
    }).then(value => {
      flag.clear()
      localStorage.setItem('userInfo', JSON.stringify(value))
      router.push('/personal/order?title=我的订单')
    })
  } else {
    let flag: any = null
    new Promise(resolve => {
      flag = Toast.loading({
        message: '正在为您跳转到登录页...',
        forbidClick: true,
      })
      setTimeout(() => {
        resolve(null)
      }, 1000)
    }).then(_ => {
      router.push('/login')
      flag.clear()
    })
  }
}
</script>

<style scoped></style>
