export function resetCart(state: any, payload?: any) {
  if (payload) {
    payload.forEach((item: any) => {
      // 将商品数量修改
      if (state.cart.addNum[item.id]) {
        item.cou = state.cart.addNum[item.id]
      }
    })
    return
  }
  state.cart.goodsDesc.forEach((item: any) => {
    // 将商品数量修改
    if (state.cart.addNum[item.id]) {
      item.cou = state.cart.addNum[item.id]
    }
  })
}
