<template>
  <div class="news_item" @click="newsDesc(news.id)">
    <router-link
      :to="{
        path: `/news/${news.id}`,
      }"
    >
      <img :src="news.img_url" alt="" />
      <div class="desc">
        <h3 class="title ellipsis">{{ news.title }}</h3>
        <div class="comment">
          <p class="date">发布时间:{{ getMyDate(new Date(news.add_time).getTime()) }}</p>
          <span class="click">点击 : {{ news.click }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { newsType } from '@/types/useHome'
import { useStore } from 'vuex'
import { key } from '@/store'
import { getMyDate } from '@/utils/useHome'

const store = useStore(key)
defineProps({
  news: {
    type: Object as PropType<newsType>,
    default: () => ({}),
  },
})

function newsDesc(id: number) {
  store.commit('home/clickNumber', id)
}
</script>

<style scoped lang="scss">
.news_item {
  padding: 10px;
  border-bottom: 1px solid #eee;
  background: $color_white;
  a {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: 80px;
  }

  .desc {
    margin-left: 10px;
    flex: 1;
    min-width: 300px;
    padding: 10px 0;

    .title {
      font-size: 28px;
      font-weight: 400;
      color: $color_title;
      margin-bottom: 5px;
    }

    .comment {
      display: flex;
      justify-content: space-between;

      .date,
      .click {
        font-size: 26px;
        color: $color_theme;
      }
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
}
</style>
