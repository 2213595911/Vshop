<template>
  <div class="desc" v-if="imgDesc">
    <h3 class="title">{{ imgDesc.title }}</h3>
    <img v-lazy="imgDesc.img_url" v-if="imgDesc.img_url" :src="imgDesc.img_url" alt="" />
    <img v-else src="https://www.escook.cn/vuebase/pics/7.png" alt="" />
    <p class="desc_text" v-html="imgDesc.content"></p>
    <div class="add_time">{{ imgDesc.add_time }}</div>
  </div>
  <van-loading color="#1989fa" v-else />
</template>

<script setup lang="ts">
import { watch, ref, Ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getImgDesc } from '@/api/useHome'
import { newsType } from '@/types/useHome'
const route = useRoute()

const imgDesc = ref() as Ref<newsType>
watch(
  () => route.query.id,
  async (v: any) => {
    if (v) {
      const id: number = v * 1
      const result = await getImgDesc(id)
      const desc = computed(() => result.message[0])
      // 获取详情接口没有返回图片，通过跳转params传递一个图片链接
      desc.value.img_url = route.params.img_url
      imgDesc.value = desc.value
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.desc {
  padding: 20px;
  margin-bottom: 80px;
  background: white;
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
  }
  .desc_text {
    font-size: 20px;
    padding: 15px 0;
  }
  .add_time {
    font-size: 20px;
    text-align: right;
    margin-top: 10px;
    padding: 10px 0;
  }
}
</style>
