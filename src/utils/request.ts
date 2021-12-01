import axios from 'axios'
import config from './config'
import { Toast } from 'vant'

const { DEV_BASEURL } = config
let flag: any = null
const instance = axios.create({
  baseURL: DEV_BASEURL,
  timeout: 5000,
})
instance.interceptors.request.use(config => {
  flag = Toast.loading({
    message: '加载中...',
    forbidClick: true,
  })
  return config
})

instance.interceptors.response.use(
  res => {
    flag.clear()
    if (res.status === 200) {
      return res.data
    }
    console.log(res)
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance