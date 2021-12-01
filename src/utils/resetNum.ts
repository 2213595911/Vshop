export function resetCart(state: any, payload?: any) {
  if (payload) {
    payload.forEach((item: any) => {
      // 为每一个商品信息添加属性用于控制选中以及未选中,如果本身已经设置就不需要重复设置
      // item.done = true
      item.done = state.cart.all
      // 将商品数量修改
      if (state.cart.addNum[item.id]) item.cou = state.cart.addNum[item.id]
    })
    return
  }
  state.cart.goodsDesc.forEach((item: any) => {
    // item.done = true
    item.done = state.cart.all
    // 将商品数量修改
    if (state.cart.addNum[item.id]) item.cou = state.cart.addNum[item.id]
  })
}
