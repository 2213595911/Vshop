import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import createPersistedstate from 'vuex-persistedstate'
import home, { HomeState } from './modules/home'
import cart, { CartState } from './modules/cart'

export const key: InjectionKey<Store<State>> = Symbol()
export type State = {
  home?: HomeState
  cart?: CartState
}
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { home, cart },
  plugins: [
    createPersistedstate({
      key: 'vShop-client-store',
      paths: ['user', 'cart', 'home'],
    }),
  ],
})
