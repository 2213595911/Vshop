<template>
  <div v-if="path === '帮助中心'">
    <van-list finished-text="没有更多了">
      <van-cell
        v-for="(item, index) in helps"
        :key="item"
        :title="index + 1 + ' ·' + item.title"
        @click="
          $router.push({
            name: 'HelpItem',
            params: {
              ...item,
            },
            query: { title: '帮助详情' },
          })
        "
      />
    </van-list>
  </div>
  <div v-if="path === '我的订单'">
    <template v-if="$store.state.personal?.isLogin">
      <div class="order_list" v-if="userInfo?.orders?.length">
        <div class="list clear" v-for="(item, index) in userInfo.orders" :key="index">
          <Item :item="item" :index="index" />
        </div>
      </div>
      <template v-else>
        <van-empty description="您暂无订单，快去添加订单把!" />
      </template>
    </template>
    <template v-else>
      <van-empty description="您还没有登录哦">
        <a href="javascript:;" class="login" @click="$router.push('/login')">点我登录</a>
      </van-empty>
    </template>
  </div>
  <div v-if="path === '我的地址'">
    <template v-if="$store.state.personal?.isLogin">
      <div class="address_list" v-if="userInfo?.address?.length">
        <AddressItem v-for="item in userInfo.address" :key="item.id" :item="item" />
        <a href="javascript:;" class="login" @click="$router.push('/personal/addAddres')">点我添加地址</a>
      </div>
      <template v-else>
        <div class="address">
          <van-empty description="您暂无地址" />
          <a href="javascript:;" class="login" @click="$router.push('/personal/addAddres')">点我添加地址</a>
        </div>
      </template>
    </template>
    <template v-else>
      <van-empty description="您还没有登录哦">
        <a href="javascript:;" class="login" @click="$router.push('/login')">点我登录</a>
      </van-empty>
    </template>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'
import type { helpType } from '@/types/usePersonal'
import Item from './order/Item.vue'
import AddressItem from './address/Item.vue'

const route = useRoute()
const store = useStore(key)
const path = ref()
// 帮助数据
const helps: helpType[] = reactive([
  {
    title: '什么是京东钱包？',
    content: `自2015年4月28日00:00起，网银钱包更名为京东钱包，域名由wangyin.com变更为jdpay.com，网银更名为京东支付。`,
  },
  {
    title: '想要咨询白条支付等金融问题怎么办？',
    content: `登录电脑端京东商城首页，点击右上方“客户服务”中“金融咨询”—进入金融帮助中心；`,
  },
  {
    title: '如何进行实名认证？',
    content: `登录电脑端京东商城首页，点击“我的京东” —点击“账户设置”下拉菜单中的“账户安全”—“实名认证”。如下图：`,
  },
  {
    title: '什么是退换货运费险?',
    content: `为了提高您在京东商城的购物体验，减少您在退换货过程中与第三方卖家产生的运费支付方面的纠纷，特由京东数科旗下主体天津津投保险经纪有限公司（以下简称“京东数科”）联合保险公司，向京东第三方卖家推出以您为被保险人的运费险（卖家版）保障服务。当您发起退换货申请且卖家同意退换货申请后，您安排物流将货物寄回卖家，卖家收货并完成退换货操作后触发理赔申请，初审时间为24小时，审核通过后理赔款将及时划至您的京东小金库、京东钱包或银行卡，理赔款预计5个工作日到账（以实际到账时间为准），还请您及时关注。若初审审核不通过而被拒赔也不要慌，您可拨打京东数科客服电话（95118）提起理赔申诉，在您按照要求提供证明材料和资料后，会再次进行审核，预计三个工作日答复。`,
  },
])
// 测试内容
store.commit('personal/getOrder')
const userInfo = computed(() => {
  return store.state.personal?.userInfo
})

watch(
  () => route.path,
  v => {
    if (v === `/personal/${route.params.title}`) {
      path.value = route.query.title
      route.meta.title = path.value
      store.commit('home/changeTitle', route.meta.title)
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.login {
  font-size: 28px;
  color: $color_theme;
  display: block;
  text-align: center;
  margin-top: 20px;
}
.goods-card {
  margin: 0;
}

.delete-button {
  height: 100%;
}
.order_list {
  background-color: $color_white;
  padding-bottom: 100px;
  height: 100vh;

  .list {
    border-bottom: 1px solid $color_a;
    padding-bottom: 20px;
    padding-top: 20px;
  }
}
.address_list {
  padding-bottom: 100px;
  height: 100vh;
  padding: 20px;
}
.address {
  text-align: center;
}
</style>
