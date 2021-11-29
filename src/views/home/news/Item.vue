<template>
  <div class="news_item">
    <img src="../../../assets/logo.png" alt="" />
    <div class="desc">
      <h3 class="title ellipsis">打架了客服节哀的私聊客服尽量快打发大水发大师傅</h3>
      <div class="comment">
        <p class="date">发布时间:2312321321321</p>
        <span class="click">电机112</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<style scoped lang="scss">
.news_item {
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #eee;
  background: $color_white;
  img {
    width: 40px;
    height: 40px;
  }
  .desc {
    margin-left: 10px;
    flex: 1;
    min-width: 300px;
    .title {
      font-size: 14px;
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
