import {createStore, Store} from 'vuex'
import {InjectionKey} from 'vue'
import createPersistedstate from 'vuex-persistedstate'
import home, {HomeState} from './modules/home'

export const key: InjectionKey<Store<State>> = Symbol()
export type State = {
    home?: HomeState
}
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {home},
    plugins: [
        createPersistedstate({
            key: 'vShop-client-store',
            paths: ['user', 'cart', 'home']
        })
    ]
})
