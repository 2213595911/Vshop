import { computed, ComputedRef } from 'vue'
import store from '@/store'

// 总价格
const countPrice = computed(() => store.state.cart?.cart.goodsDesc.filter(item => item.done).reduce((p, c) => (p += c.sell_price * c.cou), 0) * 100)
// 总数量
const count: ComputedRef<number> = computed(() => store.state.cart?.cart.goodsDesc.reduce((p, c) => p + c.cou, 0))

export { countPrice, count }
