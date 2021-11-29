<template>
  <div class="self">
    <!-- 头像 -->
    <avatar-vue></avatar-vue>
    <van-cell title="我的订单" is-link />
    <van-cell title="我的地址" is-link />
    <van-cell title="我的帮助" is-link />
  </div>
</template>

<script setup lang="ts">
import AvatarVue from './Avatar.vue'
</script>

<style scoped></style>
