import instance from '@/utils/request'

// 获取轮播图
export function getBanner(): Promise<any> {
  return instance.get('/getlunbo')
}

// 获取新闻列表
export function getNews(): Promise<any> {
  return instance.get('getnewslist')
}

//获取新闻详情
export function getNewsDesc(id: any): Promise<any> {
  return instance.get(`getnew/${id}`)
}

// 获取图片分类类目
export function getImgCategory(): Promise<any> {
  return instance.get('getimgcategory')
}

// 获取指定分类包含的图片列表
export function getImgSubCate(id: number): Promise<any> {
  return instance.get(`getimages/${id}`)
}
// 获取指定图片详情页
export function getImgDesc(id: number): Promise<any> {
  return instance.get(`getimageInfo/${id}`)
}

// 获取商品列表
export function getGoodsList(num: number): Promise<any> {
  return instance.get(`getgoods?pageindex=${num}`)
}

// 获取指定商品详情
export function getGoodsDesc(id: number): Promise<any> {
  return instance.get(`goods/getinfo/${id}`)
}
