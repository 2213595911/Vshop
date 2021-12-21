<template>
  <div class="login">
    <van-form @submit="onSubmit" @failed="error" label-align="left" label-width="4em">
      <van-cell-group inset>
        <van-field
          v-model="userInfo.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ validator: validatorUsername, required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ validator: validatorUsername, required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { Toast } from 'vant'
import { reactive } from 'vue'
import type { userType, formUserType } from '@/types/usePersonal'
import { useStore } from 'vuex'
import { key } from '@/store'
import { useRouter } from 'vue-router'

const store = useStore(key)
const router = useRouter()
const userInfo: formUserType = reactive({
  username: '',
  password: '',
})

const validatorUsername = (val: string) => {
  if (!/^[A-Za-z0-9]{5,18}$/.test(val)) {
    return `${val} 不合法，请重新输入`
  }
}

const onSubmit = () => {
  let flag: any = null
  new Promise(resolve => {
    flag = Toast.loading({
      message: '验证中请稍等...',
      forbidClick: true,
    })
    setTimeout(() => {
      const user: userType = JSON.parse(localStorage.getItem('userInfo')!)
      resolve(user)
    }, 1000)
  }).then((user: any): void => {
    if (user.username === userInfo.username && user.password === userInfo.password) {
      flag.clear()
      store.commit('personal/changeLoginStatus', true)
      router.push({
        name: 'personal',
      })
      Toast.success('欢迎回来!')
    } else {
      Toast.fail('密码或用户名不正确，请重新输入!')
    }
  })
}

const error = (errorInfo: any): void => {
  Toast.fail(errorInfo.errors[0].message)
}
</script>

<style scoped lang="scss">
.login {
  margin-top: 30px;
}
</style>
