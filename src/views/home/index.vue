<template>
  <suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <div class="loading">
        <van-loading color="#1989fa" vertical size="70px">加载中...</van-loading>
      </div>
    </template>
  </suspense>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.van-loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
