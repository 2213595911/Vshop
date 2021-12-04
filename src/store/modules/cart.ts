import { Module } from 'vuex'
import type { State } from '../index'
import { getCart, addCartGoods } from '@/api/useCart'
import type { cartGoodsType } from '@/types/useCart'
import { getData } from '@/utils/useLocal'

const initial = {
  cart: {
    goodsId: [] as number[],
    goodsDesc: [] as cartGoodsType[],
  },
}

export type CartState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    // 设置购物车商品
    setCartGoods(state, payload: cartGoodsType[]): void {
      // const data = payload.filter((item, index) => item.id !== state.cart.goodsDesc[index]?.id)
      state.cart.goodsDesc = payload
    },
    // 修改商品在购物车中的数量
    changeGoodsNum(state, arg: [id: number, num: number]): void {
      const [id, num] = arg
      const current = state.cart.goodsDesc.find(item => item.id === id)!
      current.cou = num
    },
    // 删除购物车中的指定商品
    delGoodsCart(state, id: number): void {
      const index = state.cart.goodsId.findIndex(item => item === id)
      const current = state.cart.goodsDesc.findIndex(item => item.id === id)
      state.cart.goodsId.splice(index, 1)
      state.cart.goodsDesc.splice(current, 1)
    },
    // 修改购物车指定商品的选中状态
    changeSelected(state, data: [id: number, done: boolean]): void {
      const [id, done] = data
      const current = state.cart.goodsDesc.find(item => item.id === id)!
      current.done = done
    },
    // 添加商品
    addCartId(state, data: cartGoodsType): void {
      const current = state.cart.goodsDesc.find(item => item.id === data.id)!
      const result = getData('vShop-client-store')
      const inventory = result.home.goodsList.find((item: cartGoodsType) => item.id === data.id).stock_quantity
      data.maxInventory = inventory

      if (current) {
        // 若是已存在的商品本身的数量大于最大数量那么就重置为最大数量
        if (current.cou + data.cou >= inventory) {
          current.cou = inventory
          console.log(current.cou)
          return
        }
        current.cou += data.cou
        current.maxInventory = inventory
        return
      }
      state.cart.goodsId.push(data.id)
      state.cart.goodsDesc.push(data)
    },
    // 清空购物车
    clearCart(state): void {
      state.cart.goodsId = []
      state.cart.goodsDesc = []
    },
    // 商品全选
    allSelected(state, status: boolean): void {
      state.cart.goodsDesc.forEach(item => (item.done = status))
    },
  },
  actions: {
    // 请求购物车列表
    async getCartList({ commit, state }): Promise<void> {
      if (state.cart.goodsDesc.length) return
      const result = await getCart()
      if (result?.message) {
        commit('setCartGoods', result.message)
      }
    },
    // 添加购物车商品
    async addCart({ commit }, arg: number[]): Promise<void> {
      const [id, number] = arg
      const result = await addCartGoods([id])
      result.message[0].cou = number
      result.message[0].done = true
      commit('addCartId', result.message[0])
    },
  },
  getters: {
    // 选中的总数
    count(state): number {
      return state.cart.goodsDesc.filter(item => item.done).reduce((p, c) => p + c.cou, 0)
    },
    // 全部的总数
    allCount(state): number {
      return state.cart.goodsDesc.reduce((p, c) => p + c.cou, 0)
    },
    // 总价格
    countPrice(state): number {
      return state.cart.goodsDesc.filter(item => item.done).reduce((p, c) => p + c.sell_price * c.cou, 0) * 100
    },
    // 全选按钮状态
    allChecked(state): boolean {
      if (!state.cart.goodsDesc.length) return false
      return state.cart.goodsDesc.every(item => item.done)
    },
  },
} as Module<CartState, State>
