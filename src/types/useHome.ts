export type bannerType = {
  id: number
  url: string
  img: string
}
export type newsType = {
  add_time: string
  click: number
  id: number
  img_url: string
  title: string
  zhaiyao?: string
  content?: string
  done?: boolean
}

export type imgCateType = {
  title: string
  id: number
}

export type imgListType = {
  seo_title: string
  seo_description: string
  img_url: string
  id: number
  [key: string]: any
}

export type goodsType = {
  id: number
  title: string
  add_time: string
  zhaiyao: string
  click: number
  img_url: string
  sell_price: number
  market_price: number
  stock_quantity: number
  goods_no?: string
}
