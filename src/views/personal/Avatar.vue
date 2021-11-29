<template>
  <div id="avatar">
    <div class="avatar">
      <div class="avatar_img">
        <img :src="image" alt="" />
      </div>
      <p class="login" @click="login">登录/注册</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from '@/assets/images/avatar_load.jpg'
const image = avatar
const login = (): void => {
  console.log('登录')
}
</script>

<style scoped lang="scss">
#avatar {
  padding: 10px;
  margin-bottom: 20px;
  .avatar {
    display: flex;
    align-items: center;
    padding: 20px 20px;
    background: linear-gradient(to right, #e66465, #9198e5);
    border-radius: 5px;
    &_img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      margin-left: 10px;
      color: $color_white;
    }
  }
}
</style>
