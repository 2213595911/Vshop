<template>
  <div class="item">
    <div class="personal">
      <div class="message">
        <strong>{{ item?.name }}</strong>
        <span>{{ item?.mobile }}</span>
      </div>
      <p class="address">{{ address }}</p>
    </div>
    <div>
      <a href="javascript:;" @click="editor">编辑</a>
      <a href="javascript:;" @cilck="del">删除</a>
    </div>
    <!-- 修改地址遮罩层 -->
    <van-overlay :show="show" @click="show = false" class="changeAddress">
      <van-form @submit="onSubmit" @failed="failed" @click.stop>
        <van-cell-group inset>
          <van-field v-model="form.name" name="收货人" label="收货人" placeholder="请输入收货人姓名" />
          <van-field v-model="form.mobile" name="联系方式" label="联系方式" placeholder="请输入联系方式" :rules="[{ validator: validatorMobile }]" />

          <van-field v-model="form.result" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区" @click="showArea = true" />
          <van-popup v-model:show="showArea" position="bottom">
            <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
          </van-popup>

          <van-field v-model="form.address" name="详细地址" label="详细地址" placeholder="请输入详细地址" />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed, ref, Ref } from 'vue'
import type { addressType } from '@/types/usePersonal'
import { areaList } from '@vant/area-data'
import { Toast } from 'vant'
import { useStore } from 'vuex'
import { key } from '@/store'

const store = useStore(key)
const props = defineProps({
  item: {
    type: Object as PropType<addressType>,
  },
})
const address = computed(() => `${props.item?.result.split('/').join(' ')} ${props.item?.address}`)

const show = ref(false)
// 修改地址信息表单
const form: Ref<addressType> = ref({
  name: '',
  mobile: '',
  result: '',
  address: '',
})

const showArea = ref(false)
const onConfirm = (value: any) => {
  showArea.value = false
  form.value.result = value
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
  store.commit('personal/changeAddress', form.value)
  show.value = false
  Toast.success('修改地址成功!')
}
const failed = (): void => {
  Toast.fail('请按照规则填写好提交!')
}
// 编辑地址
const editor = (): void => {
  show.value = true
  form.value = props.item!
}
// 删除地址
const del = (): void => {
  console.log(1)
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  padding: 20px;
  background: $color_white;
  @include shadow;
  justify-content: space-between;
  align-items: center;
  background: $color_theme;
  color: $color_white;
  border: 5px solid#2980b9;
  border-radius: 10px;
  margin-bottom: 20px;
  .personal {
    display: flex;
    flex-direction: column;
    .message {
      strong,
      span {
        font-size: 28px;
        margin-right: 10px;
      }
    }
    .address {
      margin-top: 10px;
      font-size: 25px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    a {
      font-size: 28px;
      color: #2f3640;

      &:last-of-type {
        color: #e84118;
      }
    }
  }
  .changeAddress {
    display: flex;
    align-items: center;
    justify-content: center;
    .van-form {
      width: 100%;
      .van-cell {
        padding: 35px !important;
      }
    }
  }
}
</style>
