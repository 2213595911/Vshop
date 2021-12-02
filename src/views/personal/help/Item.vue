<template>
  <div class="item" v-if="data.title">
    <h2 class="title">{{ data?.title }}</h2>
    <p class="content">{{ data?.content }}</p>
  </div>
  <van-empty description="暂无内容" v-else />
</template>

<script setup lang="ts">
import { watch, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'
import type { helpType } from '@/types/usePersonal'

const store = useStore(key)
const route = useRoute()

const data: Ref<helpType | undefined> = ref()
watch(
  () => route.path,
  v => {
    const path = ref(route.query.title)
    if (v === `/personal/HelpItem`) {
      route.meta.title = path.value
      store.commit('home/changeTitle', route.meta.title)
      data.value = route.params as helpType
    }
  },
  { immediate: true, deep: true }
)
</script>

<style scoped lang="scss">
.item {
  background: $color_white;
  padding: 20px;
  height: 100vh;
  .title {
    margin: 0;
  }
  .content {
    margin-top: 20px;
    padding: 10px;
    border: 10px solid #27ae60;
    border-radius: 10px;
    font-size: 25px;
  }
}
</style>
