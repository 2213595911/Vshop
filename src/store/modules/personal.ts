import { Module } from 'vuex'
import type { State } from '../index'

const initial = { isLogin: false }
export type PersonalState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    changeLoginStatus(state, status: boolean): void {
      state.isLogin = status
    },
  },
  actions: {},
} as Module<PersonalState, State>
