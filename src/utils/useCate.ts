import { CateType } from '@/types/useCate'

// 递归处理数据
export function recursion(data: CateType[]) {
  return data.map((item: any) => {
    for (const key in item) {
      if (key === 'name') {
        item['text'] = item[key]
        delete item[key]
      } else {
        key === 'child' ? (item['child'] = recursion(item[key])) : (item[key] = item[key])
      }
    }
    return item
  })
}
