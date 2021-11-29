<template>
  <div class="images">
    <van-tabs v-model:active="active" color="#50a0f8">
      <van-tab title="全部" to="/images"></van-tab>
      <van-tab title="家具生活" to="/images/live"></van-tab>
      <van-tab title="摄影设计" to="/images/photography"></van-tab>
      <van-tab title="明星美女" to="/images/star"></van-tab>
    </van-tabs>
    <!-- 切换显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(0)
</script>

<style scoped></style>
