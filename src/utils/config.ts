// 定义开发环境下默认请求路径
const DEV_BASEURL = 'http://www.liulongbin.top:3005/api'
// 定义生产环境下默认请求路径
const PDC_BASEURL = 'http://www.liulongbin.top:3005/api'

export type configType = {
  DEV_BASEURL: string
  PDC_BASEURL: string
}
export default {
  DEV_BASEURL,
  PDC_BASEURL,
} as configType
