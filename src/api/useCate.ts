import instance from '@/utils/request'

export function getCate() {
  return instance({
    // baseURL: '/api',
    baseURL: 'http://api.tbk.dingdanxia.com/spk/cate?apikey=ROQZ7Qrlt9xD6CcUvGar6YslDccSZ1OC&tree=true',
    method: 'get',
  })
}
