import instance from '@/utils/request'

export function getCate() {
  return instance({
    baseURL: '/api',
    method: 'get',
  })
}
