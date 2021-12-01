import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import createPersistedstate from 'vuex-persistedstate'
import home, { HomeState } from './modules/home'
import cart, { CartState } from './modules/cart'
import personal, { PersonalState } from './modules/personal'

export const key: InjectionKey<Store<State>> = Symbol()
export type State = {
  home?: HomeState
  cart?: CartState
  personal?: PersonalState
}
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { home, cart, personal },
  plugins: [
    createPersistedstate({
      key: 'vShop-client-store',
      paths: ['personal', 'cart', 'home'],
    }),
  ],
})
