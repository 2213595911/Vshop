<template>
  <div>
    <van-submit-bar :price="3050" :button-text="`提交订单(${count})`" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip> 总计不包含运费</template>
    </van-submit-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
const count = ref(2)
const onSubmit = (): void => {}
const onClickLink = (): void => {
  console.log('修改地址')
}
</script>

<style scoped></style>
