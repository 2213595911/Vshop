import type { cartGoodsType } from './useCart'
export type userType = {
  username: string
  password: string
  orders: [cartGoodsType[]]
  data: userInfoType[]
  address: addressType[]
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

export type addressType = {
  id?: string
  name: string
  mobile: string
  address: string
  result: string
}
