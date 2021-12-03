<template>
  <div id="avatar">
    <div v-if="!isLogin" class="avatar">
      <div class="avatar_img">
        <img :src="image" alt="" />
      </div>
      <p class="login" @click="login">登录/注册</p>
    </div>
    <div v-else class="user">
      <div class="userInfo">
        <div class="user_img">
          <img :src="userInfo?.avatar" alt="" />
        </div>
        <p class="login" @click="login">{{ userInfo?.userName }}</p>
      </div>
      <div class="logout" @click="logout">退出</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'
import type { userInfoType } from '@/types/usePersonal'
import { Toast } from 'vant'

const store = useStore(key)
const router = useRouter()
const userInfo: Ref<null | userInfoType> = ref(null)
const isLogin = computed(() => store.state.personal?.isLogin)
const image = require('@/assets/images/avatar_load.jpg')
if (isLogin.value) {
  const { data } = JSON.parse(localStorage.getItem('userInfo')!) as { data: userInfoType }
  userInfo.value = data
}
const login = (): void => {
  router.push('/login')
}
const logout = (): void => {
  new Promise(resolve => {
    Toast.loading({
      message: '退出中，请稍等...',
      forbidClick: true,
    })
    setTimeout(() => {
      resolve('退出成功')
    }, 1000)
  }).then((config: any): void => {
    store.commit('personal/changeLoginStatus', false)
    Toast.clear()
    Toast.success(config)
  })
}
</script>

<style scoped lang="scss">
#avatar {
  padding: 10px;
  margin-bottom: 20px;
  .avatar {
    display: flex;
    align-items: center;
    padding: 40px 20px;
    background: linear-gradient(to right, #e66465, #9198e5);
    border-radius: 5px;
    &_img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      font-size: 30px;
      margin-left: 10px;
      color: $color_white;
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    background: linear-gradient(to right, #e66465, #9198e5);
    border-radius: 5px;
    .userInfo {
      display: flex;
      align-items: center;
      .user_img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .login {
        font-size: 30px;
        margin-left: 10px;
        color: $color_white;
      }
    }
    .logout {
      margin-right: 15px;
      font-size: 28px;
      color: $color_white;
      padding: 10px 15px;
      background: $color_theme;
      border-radius: 10px;
      border: $color_h solid 1px;
    }
  }
}
</style>
