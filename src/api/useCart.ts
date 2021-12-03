import instance from '@/utils/request'
import store from '@/store/index'

// 获取购物车数据
export function getCart(): Promise<any> | { message: any[] } {
  if (!store.state.cart?.cart.goodsId.length) {
    return { message: [] }
  }
  const cartId = store.state.cart?.cart.goodsId
  const cartString = cartId?.join(',')
  return instance.get(`goods/getshopcarlist/${cartString}`)
}

// 追加购物车商品
export function addCartGoods(id: number[]): Promise<any> {
  return instance.get(`goods/getshopcarlist/${id.join('')}`)
}
