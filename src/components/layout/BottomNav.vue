<template>
  <van-tabbar v-model="active" :route="true" border>
    <van-tabbar-item @click="$router.push('/')" to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart-o" :badge="count">购物车</van-tabbar-item>
    <van-tabbar-item @click="$router.push('/personal/')" to="/personal" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

const store = useStore(key)
const count = computed(() => store.getters['cart/allCount'])
const active = ref(0)
watch(active, v => {
  console.log(v)
})
</script>

<style scoped lang="scss">
.van-tabbar {
  border-top: 1px solid $color_h;
}
</style>
