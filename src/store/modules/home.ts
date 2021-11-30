import { Module } from 'vuex'
import type { State } from '../index'
import { getNews, getImgSubCate, getGoodsList } from '@/api/useHome'
import type { newsType, imgListType, goodsType } from '@/types/useHome'

const initial = { flag: false, title: '首页', news: [] as newsType[], images: [] as imgListType[], goodsList: [] as goodsType[] }
export type HomeState = typeof initial
export default {
  namespaced: true,
  state: initial,
  mutations: {
    // 设置两种不同标题显示
    changeState(state, value: boolean): void {
      state.flag = value
    },
    // 设置标题内容
    changeTitle(state, value: string): void {
      state.title = value
    },
    // 设置新闻数据
    setNews(state, payload: newsType[]): void {
      payload.forEach((item: newsType) => (item.done = false))
      state.news = payload
    },
    // 设置点击次数响应
    clickNumber(state, id: number): void {
      const current = state.news.find(item => item.id === id)!
      if (current && !current.done) {
        current.done = true
        current.click++
      }
    },
    // 设置图片数据
    setImage(state, payload: imgListType[]): void {
      state.images = payload
    },
    // 设置商品数据
    setGoods(state, payload: goodsType[]) {
      state.goodsList = payload
    },
  },
  actions: {
    async getNews({ commit, state }): Promise<void> {
      // 如果已经有数据就不需要再去请求
      if (state.news.length && state.news[0].id) return
      const { message } = await getNews()
      commit('setNews', message)
    },

    async getImg({ commit }, id: number): Promise<void> {
      const { message } = await getImgSubCate(id)
      commit('setImage', message as imgListType[])
    },
    async getGoodsList({ commit }, num: number = 1): Promise<void> {
      const { message } = await getGoodsList(num)
      commit('setGoods', message)
    },
  },
} as Module<HomeState, State>
