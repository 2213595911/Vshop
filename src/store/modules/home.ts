import { Module } from 'vuex'
import type { State } from '../index'
const initial = { flag: false, title: '首页' }

export type HomeState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    changeState(state, value: boolean) {
      state.flag = value
    },
    changeTitle(state, value: string) {
      state.title = value
    },
  },
} as Module<HomeState, State>
