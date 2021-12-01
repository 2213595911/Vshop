import type { cartGoodsType } from './useCart'
export type userType = {
  username: string
  password: string
  orders: [cartGoodsType[]]
  data: userInfoType[]
}

export type userInfoType = {
  avatar: string
  userName: string
}

export type orderType = {
  title: string
  path: string
}

export type helpType = {
  title: string
  content: string
}
