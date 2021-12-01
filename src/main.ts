import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import 'normalize.css'
import '@/assets/styles/global.scss'
import 'lib-flexible'
import {
  Tabs,
  Cell,
  Button,
  NavBar,
  Tab,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  TreeSelect,
  Card,
  Stepper,
  SubmitBar,
  Checkbox,
  Loading,
  Lazyload,
  Empty,
  Pagination,
  Toast,
} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(Tab)
  .use(Tabs)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(TreeSelect)
  .use(Card)
  .use(Stepper)
  .use(SubmitBar)
  .use(Checkbox)
  .use(Cell)
  .use(Loading)
  .use(Lazyload)
  .use(Empty)
  .use(Pagination)
  .use(Toast)
app.mount('#app')