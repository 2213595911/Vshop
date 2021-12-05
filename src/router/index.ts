import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'

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
