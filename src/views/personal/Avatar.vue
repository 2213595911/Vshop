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
        <p class="login">{{ userInfo?.userName }}</p>
      </div>
      <div class="operator">
        <button class="editor" @click="edit">编辑</button>
        <button class="logout" @click="logout">退出</button>
      </div>
    </div>
    <!-- 编辑用户信息表单 -->
    <van-overlay :show="show" @click="hideMask">
      <div class="wrapper" @click.stop>
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              ref="input"
              v-model="changeUserInfo"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"> 提交 </van-button>
          </div>
        </van-form>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, ComputedRef, nextTick, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'
import type { userInfoType } from '@/types/usePersonal'
import { Toast } from 'vant'

const store = useStore(key)
const router = useRouter()

const isLogin = computed(() => store.state.personal?.isLogin)
const image = require('@/assets/images/avatar_load.jpg')
// 用户控制遮罩层显示
const show = ref(false)
const userInfo: ComputedRef<userInfoType> = computed(() => store.state.personal?.userInfo.data!)
if (isLogin.value) {
  store.commit('personal/getOrder')
}
// 用户名称修改
const changeUserInfo = ref(store.state.personal?.userInfo.data.userName)
const input: Ref<undefined | HTMLInputElement> = ref()
// 跳转登录页面
const login = (): void => {
  router.push('/login')
}
// 退出登录
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
// 编辑
const edit = (): void => {
  show.value = true
  nextTick(() => input.value?.focus())
}
// 提交修改用户信息
const onSubmit = (): void => {
  store.commit('personal/changeUserName', changeUserInfo.value)
  show.value = false
}
// 隐藏遮罩层
const hideMask = (): void => {
  show.value = false
  changeUserInfo.value = userInfo.value?.userName
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
    .operator {
      display: flex;
      .logout {
        margin-right: 15px;
        font-size: 28px;
        color: $color_white;
        padding: 10px 15px;
        background: #e74c3c;
        border-radius: 10px;
        border: $color_h solid 1px;
      }
      .editor {
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
}
.wrapper {
  width: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
