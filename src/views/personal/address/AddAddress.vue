<template>
  <div class="add">
    <van-form @submit="onSubmit" @failed="failed">
      <van-cell-group inset>
        <van-field
          v-model="form.name"
          name="收货人"
          label="收货人"
          placeholder="请输入收货人姓名"
          :rules="[{ required: true, message: '请填写收货人姓名' }]"
        />
        <van-field
          v-model="form.mobile"
          name="联系方式"
          label="联系方式"
          placeholder="请输入联系方式"
          :rules="[{ validator: validatorMobile, required: true, message: '请填写联系方式' }]"
        />

        <van-field
          v-model="form.result"
          is-link
          readonly
          name="area"
          label="地区选择"
          :rules="[{ required: true, message: '请选择地址' }]"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
        </van-popup>

        <van-field
          v-model="form.address"
          name="详细地址"
          label="详细地址"
          placeholder="请输入详细地址"
          :rules="[{ required: true, message: '请填写详细信息地址' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { areaList } from '@vant/area-data'
import { Toast } from 'vant'
import { nanoid } from 'nanoid'
import type { addressType } from '@/types/usePersonal'
import { useStore } from 'vuex'
import { key } from '@/store'
import { useRouter } from 'vue-router'

const store = useStore(key)
const router = useRouter()
const form: addressType = reactive({
  id: nanoid(),
  name: '',
  mobile: '',
  result: '',
  address: '',
})

const showArea = ref(false)
const onConfirm = (value: any) => {
  showArea.value = false
  form.result = value
    .filter((item: any) => !!item)
    .map((item: any) => item.name)
    .join('/')
}

const validatorMobile = (val: any) => {
  if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val)) {
    return `电话号码不合法，请重新输入`
  }
}
const onSubmit = (): void => {
  store.commit('personal/addAddress', form)
  router.go(-1)
  Toast.success('添加地址成功!')
}
const failed = (): void => {
  Toast.fail('请按照规则填写好提交!')
}
</script>

<style scoped lang="scss">
.add {
  margin-top: 30px;
  .van-cell-group {
    @include shadow;
  }
}
</style>
