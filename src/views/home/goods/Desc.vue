<template>
  <div class="desc" v-if="desc">
    <div class="img card">
      <img v-if="desc && desc.img_url" :src="desc.img_url" alt="" />
      <img v-else src="https://www.escook.cn/vuebase/pics/7.png" alt="" />
    </div>
    <div class="goods_price card">
      <div class="title">{{ desc.title }}</div>
      <div class="price">
        <span
          >市场价：<span class="delete">{{ desc.market_price }}</span></span
        >
        <span
          >销售价：<span class="money">￥{{ desc.sell_price }}</span></span
        >
      </div>
      <div class="num">
        购买数量：
        <van-stepper v-model="numValue" :max="desc.stock_quantity" />
      </div>
      <div class="operator">
        <van-button type="primary" size="small">立即购买</van-button>
        <van-button type="danger" size="small" @click="addCart(desc.id)">加入购物车</van-button>
      </div>
    </div>
    <div class="goods_params card">
      <div class="title">商品参数</div>
      <div class="params">
        <p>商品货号：{{ desc.goods_no }}</p>
        <p>库存情况：{{ desc.stock_quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { getGoodsDesc } from '@/api/useHome'
import type { goodsType } from '@/types/useHome'
import { useStore } from 'vuex'
import { key } from '@/store'
import { Toast } from 'vant'
const store = useStore(key)
const route = useRoute()
// 购买数量
const numValue = ref(1)
const desc = ref() as Ref<goodsType>
// 监视路径的变化根据不同的id获取不同的商品信息
watch(
  () => route.path,
  async (path: string) => {
    if (path === `/goods/${route.params.id}`) {
      let id: any = route.params.id
      const { message } = await getGoodsDesc(id * 1)
      // 信息中追加图片
      message[0].img_url = route.params.img
      desc.value = message[0]
    }
  },
  {
    immediate: true,
  }
)
// 加入购物车
const addCart = (id: number) => {
  Toast.success('添加购物车成功!')
  store.commit('cart/addCartId', [id, numValue.value])
}
</script>

<style scoped lang="scss">
.title {
  padding: 24px;
  border-bottom: $color_h solid 1px;
  font-size: 24px;
  font-weight: 700;
}
.desc {
  padding: 20px;
  padding-bottom: 100px;
  box-sizing: border-box;
  .card {
    border: $color_h solid 1px;
    width: 100%;
    background: $color_white;
    @include shadow;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  .img {
    padding: 20px;
    img {
      width: 50%;
      margin: 0 auto;
      display: block;
    }
  }
  .goods_price {
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .price {
      margin: 20px 20px;
      font-size: 20px;
      span {
        margin-right: 10px;
      }
    }

    .num {
      margin: 20px 20px;
    }
    .operator {
      margin: 0 20px;
      .van-button {
        margin: 0 10px;
        border-radius: 10px;
      }
    }
  }
  .goods_params {
    box-sizing: border-box;
    .params {
      padding: 20px;
      p {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
