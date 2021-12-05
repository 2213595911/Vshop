import { RouteRecordRaw } from 'vue-router'
// 首页
const Home = () => import(/* webpackChunkName: "group-home" */ '@/views/home/index.vue')
// 首页二级
const Base = () => import(/* webpackChunkName: "group-home" */ '@/views/home/base.vue')
// 新闻
const News = () => import(/* webpackChunkName: "group-news" */ '@/views/home/news/index.vue')
const NewsDesc = () => import(/* webpackChunkName: "group-news" */ '@/views/home/news/newsDesc.vue')
// 图片
const Images = () => import(/* webpackChunkName: "group-images" */ '@/views/home/images/index.vue')
const ImageList = () => import(/* webpackChunkName: "group-images" */ '@/views/home/images/ImageList.vue')
const ImgDesc = () => import(/* webpackChunkName: "group-images" */ '@/views/home/images/Desc.vue')
// 商品
const Goods = () => import(/* webpackChunkName: "group-goods" */ '@/views/home/goods/index.vue')
const GoodsDesc = () => import(/* webpackChunkName: "group-goods" */ '@/views/home/goods/Desc.vue')
// 分类
const Category = () => import(/* webpackChunkName: "group-category" */ '@/views/category/index.vue')
// 购物车
const Cart = () => import(/* webpackChunkName: "group-category" */ '@/views/cart/index.vue')
// 个人中心
const Personal = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/index.vue')
const PersonalBase = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/Base.vue')
// 登录组件
const Login = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/Login.vue')
// 帮助等组件
const Other = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/Other.vue')
const HelpItem = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/help/Item.vue')
// 地址组件
const addAddress = () => import(/* webpackChunkName: "group-persoanl" */ '@/views/personal/address/AddAddress.vue')

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
    ],
  },
]

export default routes
