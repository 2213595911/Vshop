import { Module } from 'vuex'
import { getData, setData } from '@/utils/useLocal'
import type { State } from '../index'
import type { userType, addressType } from '@/types/usePersonal'
import type { cartGoodsType } from '@/types/useCart'

const initial = {
  isLogin: false,
  userInfo: {
    address: [] as addressType[],
    username: 'admin',
    password: 'admin',
    orders: [[]] as [cartGoodsType[]],
  } as userType,
}
export type PersonalState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    // 登录状态
    changeLoginStatus(state, status: boolean): void {
      state.isLogin = status
    },
    // 订单业务
    // 获取订单数据
    getOrder(state): void {
      const data = getData('userInfo')
      state.userInfo = data
    },
    // 删除指定订单
    deleteOrder(state, index: number): void {
      state.userInfo.orders.splice(index, 1)
      setData('userInfo', state.userInfo)
    },
    // 添加商品
    addGoods(state, arg: cartGoodsType[]): void {
      // 添加支付状态
      arg.forEach(item => (item.pay = false))
      state.userInfo.orders.push(arg)
      setData('userInfo', state.userInfo)
    },
    // 删除订单中某个商品
    del(state, arg: number[]): void {
      const [index, id] = arg
      const i = state.userInfo.orders[index].findIndex(goods => goods.id === id)
      state.userInfo.orders[index].splice(i, 1)
      if (!state.userInfo.orders[index].length) {
        state.userInfo.orders.splice(index, 1)
      }
      setData('userInfo', state.userInfo)
    },
    // 地址业务
    // 添加地址
    addAddress(state, arg: addressType): void {
      const valid = state.userInfo.address.findIndex(item => item.id === arg.id)
      if (valid !== -1) {
        state.userInfo.address[valid] = arg
      } else {
        state.userInfo.address.push(arg)
        setData('userInfo', state.userInfo)
      }
    },
    // 修改地址
    changeAddress(state, form: addressType): void {
      const index = state.userInfo.address.findIndex(item => item.id === form.id)
      state.userInfo.address[index] = form
      setData('userInfo', state.userInfo)
    },
    delAddress(state, id: string) {
      const index = state.userInfo.address.findIndex(item => item.id === id)
      state.userInfo.address.splice(index, 1)
      setData('userInfo', state.userInfo)
    },
  },
  actions: {},
} as Module<PersonalState, State>
