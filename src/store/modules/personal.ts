import { Module } from 'vuex'
import { getData, setData } from '@/utils/useLocal'
import type { State } from '../index'
import type { userType, addressType, userInfoType } from '@/types/usePersonal'
import type { cartGoodsType } from '@/types/useCart'

const initial = {
  isLogin: false,
  userInfo: {
    address: [] as addressType[],
    username: 'admin',
    password: 'admin',
    orders: [[]] as [cartGoodsType[]],
    data: {} as userInfoType,
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
      arg.isDefault = false
      if (valid !== -1) {
        // 如果已经存在并且是第一位那么需要修改为true
        state.userInfo.address[valid] = arg
        if (valid === 0) state.userInfo.address[valid].isDefault = true
      } else {
        // 判断如果地址数据中没有值那么证明将要添加的是第一个位所以是默认
        if (!state.userInfo.address.length) arg.isDefault = true
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
    // 删除地址
    delAddress(state, id: string): void {
      const index = state.userInfo.address.findIndex(item => item.id === id)
      state.userInfo.address.splice(index, 1)
      // 删除之后若只剩最后一个那么将最后一个设为默认地址
      if (state.userInfo.address.length === 1) state.userInfo.address[0].isDefault = true
      setData('userInfo', state.userInfo)
    },
    // 修改默认地址
    changeDefaultAddress(state, id: string) {
      const index = state.userInfo.address.findIndex(item => item.id === id)
      state.userInfo.address.forEach(item => {
        item.isDefault = false
        // 查询要设置默认的地址
        if (item.id === id) {
          // 将默认地址排到第一个位置
          item.isDefault = true
          const temp = item
          state.userInfo.address.splice(index, 1)
          state.userInfo.address.unshift(temp)
        }
      })
      setData('userInfo', state.userInfo)
    },
    // 修改用户名称
    changeUserName(state, value: string): void {
      state.userInfo.data.userName = value
      setData('userInfo', state.userInfo)
    },
  },
  actions: {},
} as Module<PersonalState, State>
