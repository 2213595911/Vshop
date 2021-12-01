<template>
  <van-tabbar v-model="active" :route="true">
    <van-tabbar-item @click="$router.push('/')" to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart-o" :badge="count">购物车</van-tabbar-item>
    <van-tabbar-item to="/personal" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { count } from '@/utils/useCart'

const active = ref(0)
</script>

<style scoped></style>
