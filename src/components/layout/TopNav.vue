<template>
  <van-nav-bar v-if="!flag" :title="title" />
  <van-nav-bar v-else :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'
const router = useRouter()
const route = useRoute()
const store = useStore(key)
const title = computed(() => store.state.home?.title)
const flag = computed(() => store.state.home?.flag)

const onClickLeft = () => {
  if (route.meta.level === 1 || route.meta.level === 2) {
    router.push('/')
    store.commit('home/changeTitle', '首页')
  } else {
    router.go(-1)
  }
}
</script>

<style scoped></style>
