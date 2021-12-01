import instance from '@/utils/request'
import store from '@/store/index'

export function getCart(): Promise<any> | { message: any[] } {
  if (!store.state.cart?.cart.goodsId.length) {
    return { message: [] }
  }
  const cartId = store.state.cart?.cart.goodsId
  const cartString = cartId?.join(',')
  return instance.get(`goods/getshopcarlist/${cartString}`)
}
