<template>
  <van-tabbar v-model="active" :route="true">
    <van-tabbar-item @click="$router.push('/')" to="/" name="首页" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" name="分类" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" name="购物车" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/personal" name="我的" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from 'vue'
import { key } from '@/store'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const active: Ref<string> = ref('首页')
const store = useStore(key)
const route = useRoute()
//
// watch(
//   () => route.path,
//   v => {

//   }
// )
</script>

<style scoped></style>
