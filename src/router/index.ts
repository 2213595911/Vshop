import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 首页
const Home = () => import('@/views/home/index.vue')
// 首页二级
const Base = () => import('@/views/home/base.vue')
const News = () => import('@/views/home/news/index.vue')
const NewsDesc = () => import('@/views/home/news/newsDesc.vue')
const Images = () => import('@/views/home/images/index.vue')
// 图片三级
const ImageList = () => import('@/views/home/images/ImageList.vue')
const ImgDesc = () => import('@/views/home/images/Desc.vue')

const Goods = () => import('@/views/home/goods/index.vue')
const GoodsDesc = () => import('@/views/home/goods/Desc.vue')

// 分类
const Category = () => import('@/views/category/index.vue')

// 购物车
const Cart = () => import('@/views/cart/index.vue')

// 个人中心
const Personal = () => import('@/views/personal/index.vue')
// 登录组件
const Login = () => import('@/views/personal/Login.vue')
// 帮助等组件
const Other = () => import('@/views/personal/Other.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { level: 1, title: '首页' },
    component: Home,
    children: [
      { path: '', component: Base },
      { path: 'news', meta: { level: 2, title: '新闻咨询列表' }, component: News },
      { path: 'news/:id', meta: { title: '新闻详情页', level: 3 }, component: NewsDesc },
      {
        path: 'images',
        meta: { level: 2, title: '图片分享列表' },
        component: Images,
        children: [
          { path: ':id', component: ImageList },
          { path: '', meta: { level: 3, title: '图片详情' }, name: 'imgDesc', component: ImgDesc },
        ],
      },
      { path: 'goods', meta: { level: 2, title: '商品列表' }, component: Goods },
      { path: 'goods/:id', name: 'goodsDesc', meta: { level: 3, title: '商品详情页' }, component: GoodsDesc },
    ],
  },
  { path: '/category', meta: { level: 1, title: '分类' }, component: Category },
  { path: '/cart', meta: { level: 1, title: '购物车' }, component: Cart },
  { path: '/personal', name: 'personal', meta: { level: 1, title: '我的' }, component: Personal },
  { path: '/login', component: Login, meta: { level: 3, title: '登录' } },
  { path: '/personal/:title', component: Other },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
