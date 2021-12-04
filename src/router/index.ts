import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 首页
const Home = () => import('@/views/home/index.vue')
// 首页二级
const Base = () => import('@/views/home/base.vue')
// 新闻
const News = () => import('@/views/home/news/index.vue')
const NewsDesc = () => import('@/views/home/news/newsDesc.vue')
// 图片
const Images = () => import('@/views/home/images/index.vue')
const ImageList = () => import('@/views/home/images/ImageList.vue')
const ImgDesc = () => import('@/views/home/images/Desc.vue')
// 商品
const Goods = () => import('@/views/home/goods/index.vue')
const GoodsDesc = () => import('@/views/home/goods/Desc.vue')

// 分类
const Category = () => import('@/views/category/index.vue')

// 购物车
const Cart = () => import('@/views/cart/index.vue')

// 个人中心
const Personal = () => import('@/views/personal/index.vue')
const PersonalBase = () => import('@/views/personal/Base.vue')
// 登录组件
const Login = () => import('@/views/personal/Login.vue')
// 帮助等组件
const Other = () => import('@/views/personal/Other.vue')
const HelpItem = () => import('@/views/personal/help/Item.vue')
// 地址组件
const addAddress = () => import('@/views/personal/address/AddAddress.vue')
// 支付页面
const Pay = () => import('@/views/pay/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { level: 1, title: '首页' },
    component: Home,
    children: [
      { path: '/', component: Base },
      { path: 'news', meta: { level: 2, title: '新闻咨询列表' }, component: News },
      { path: 'news/:id', meta: { level: 3, title: '新闻详情页' }, component: NewsDesc },
      {
        path: 'images',
        meta: { level: 2, title: '图片分享列表' },
        component: Images,
        children: [
          { path: ':id', meta: { level: 2, title: '图片分享列表' }, component: ImageList },
          { path: '', meta: { level: 3, title: '图片详情' }, name: 'imgDesc', component: ImgDesc },
        ],
      },
      { path: 'goods', meta: { level: 2, title: '商品列表' }, component: Goods },
      { path: 'goods/:id', meta: { level: 3, title: '商品详情页' }, name: 'goodsDesc', component: GoodsDesc },
    ],
  },
  { path: '/category', meta: { level: 1, title: '分类' }, component: Category },
  { path: '/cart', meta: { level: 1, title: '购物车' }, component: Cart },
  {
    path: '/personal',
    name: 'personal',
    redirect: '/personal/',
    meta: { level: 1, title: '我的' },
    component: Personal,
    children: [
      { path: '', component: PersonalBase },
      { path: '/login', component: Login, meta: { level: 3, title: '登录' } },
      { path: ':title', meta: { level: 3 }, component: Other },
      { path: 'HelpItem', meta: { level: 3, title: '帮助详情' }, name: 'HelpItem', component: HelpItem },
      { path: 'addAddres', meta: { level: 3, title: '新增收货地址' }, component: addAddress },
      { path: '/pay', meta: { title: '支付中心', level: 3 }, component: Pay },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(to => {
  if (to.meta.title) {
    document.title = to.query.title ? (to.query.title as string) : (to.meta.title as string)
  }
})

export default router
