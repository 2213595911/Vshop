import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 首页
const Home = () => import('@/views/home/index.vue')
// 首页二级
const Base = () => import('@/views/home/base.vue')
const News = () => import('@/views/home/news/index.vue')
const Images = () => import('@/views/home/images/index.vue')
// 图片三级
const All = () => import('@/views/home/images/All.vue')
const Photography = () => import('@/views/home/images/Photography.vue')
const Live = () => import('@/views/home/images/Live.vue')
const Star = () => import('@/views/home/images/Star.vue')

const Goods = () => import('@/views/home/goods/index.vue')

// 分类
const Category = () => import('@/views/category/index.vue')

// 购物车
const Cart = () => import('@/views/cart/index.vue')

// 个人中心
const Personal = () => import('@/views/personal/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { level: 1, title: '首页' },
    component: Home,
    children: [
      { path: '', component: Base },
      { path: 'news', meta: { level: 2, title: '新闻咨询列表' }, component: News },
      {
        path: 'images',
        meta: { level: 2, title: '图片分享列表' },
        component: Images,
        children: [
          { path: '', component: All },
          { path: 'live', component: Live },
          { path: 'photography', component: Photography },
          { path: 'star', component: Star },
        ],
      },
      { path: 'goods', meta: { level: 2, title: '商品列表' }, component: Goods },
    ],
  },
  { path: '/category', meta: { level: 1, title: '分类' }, component: Category },
  { path: '/cart', meta: { level: 1, title: '购物车' }, component: Cart },
  { path: '/personal', meta: { level: 1, title: '我的' }, component: Personal },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
