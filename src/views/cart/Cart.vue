<template>
  <div class="list">
    <van-checkbox v-model="checked"></van-checkbox>
    <van-card :num="value" centered price="2.00" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
      <template #footer>
        <van-button type="danger" size="mini">删除</van-button>
        <van-stepper v-model="value" />
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
const value: Ref<number> = ref(0)
const checked: Ref<boolean> = ref(true)
</script>

<style scoped lang="scss">
.list {
  border-bottom: solid 1px #ccc;
  display: flex;
  .van-checkbox {
    margin-left: 10px;
  }
  &:last-of-type {
    border-bottom: none;
  }
  .van-card {
    flex: 1;
  }
}
</style>
