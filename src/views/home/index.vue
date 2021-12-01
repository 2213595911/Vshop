<template>
  <suspense>
    <router-view></router-view>
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
