import { Module } from 'vuex'
import type { State } from '../index'
import { getCart } from '@/api/useCart'
import { resetCart } from '@/utils/resetNum'
const initial = {
  cart: {
    goodsId: [87],
    addNum: {} as { [key: string]: number },
    goodsDesc: [] as any[],
  },
}

export type CartState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    // 添加新商品到购物车
    addCartId(state, arg: number[]): void {
      const [id, num] = arg
      state.cart.goodsId.push(id)
      // 如果传递了num代表选择了数量那么我们就需要选择的数量存储到对象中
      if (num) {
        state.cart.addNum[id] = num
      }
    },
    // 设置购物车商品
    setCartGoods(state, payload): void {
      if (payload.length) {
        resetCart(state, payload)
      }
      // 如果存储添加数量的对象中可以找到当前的商品id证明添加过，那么就把添加的数量替换掉
      state.cart.goodsDesc = payload
    },
    // 修改商品的数量
    changeGoodsNum(state, arg: number[]): void {
      const [id, num] = arg
      state.cart.addNum[id] = num

      resetCart(state)
    },
    // 删除购物车中的指定商品
    delGoodsCart(state, id: number): void {
      const index = state.cart.goodsId.findIndex(item => item === id)
      state.cart.goodsId.splice(index, 1)
    },
    // 清空购物车
    clearCart(state): void {
      state.cart.goodsId = []
      state.cart.goodsDesc = []
    },
  },
  actions: {
    // 请求购物车列表
    async getCartList({ commit }): Promise<void> {
      const result = await getCart()
      if (result?.message) {
        commit('setCartGoods', result.message)
      }
    },
  },
} as Module<CartState, State>
