<template>
  <div class="news_item" @click="newsDesc(news.id)">
    <router-link
      :to="{
        path: `/news/${news.id}`,
        query: { id: news.id },
      }"
    >
      <img :src="news.img_url" alt="" />
      <div class="desc">
        <h3 class="title ellipsis">{{ news.title }}</h3>
        <div class="comment">
          <p class="date">发布时间:{{ news.add_time }}</p>
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
    width: 40px;
    height: 40px;
  }

  .desc {
    margin-left: 10px;
    flex: 1;
    min-width: 300px;

    .title {
      font-size: 20px;
      font-weight: 400;
      color: $color_title;
      margin-bottom: 5px;
    }

    .comment {
      display: flex;
      justify-content: space-between;

      .date,
      .click {
        font-size: 12px;
        color: $color_theme;
      }
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
}
</style>
