import { reactive } from 'vue'
import { getData } from './useLocal'

// 用户信息
const userInfo = reactive({
  address: [
    { id: 'eDoAAhWkJW-MsQHsIHuKh', name: '王浩楠', mobile: '15933371902', result: '内蒙古自治区/呼和浩特市/新城区', address: '东三召乡西三召村' },
    { id: 'IUVtzQYTDaNHt1i02nPM5', name: '王浩楠', mobile: '15933371902', result: '北京市/北京市/东城区', address: 'dongsnahzao' },
    { id: 'RePqsmlHeR5i8nUqUZWGH', name: '铁蛋', mobile: '15911199999', result: '山西省/太原市/小店区', address: '山旮旯' },
  ],
  username: 'admin',
  password: 'admin',
  data: { avatar: 'https://www.escook.cn/vuebase/pics/7.png', userName: '码路伢子' },
  orders: [
    [
      {
        cou: 1,
        id: 87,
        title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
        sell_price: 2195,
        thumb_path: 'https://www.escook.cn/vuebase/pics/3.png',
        done: true,
      },
      {
        cou: 10,
        id: 88,
        title: '苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）',
        sell_price: 5780,
        thumb_path: 'https://www.escook.cn/vuebase/pics/3.png',
        done: true,
      },
    ],
    [
      {
        cou: 1,
        id: 87,
        title: '华为（HUAWEI）荣耀6Plus 16G双4G版',
        sell_price: 2195,
        thumb_path: 'https://www.escook.cn/vuebase/pics/3.png',
        done: true,
      },
      {
        cou: 10,
        id: 88,
        title: '苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）',
        sell_price: 5780,
        thumb_path: 'https://www.escook.cn/vuebase/pics/3.png',
        done: true,
      },
      {
        cou: 1,
        id: 89,
        title: '小米（Mi）小米Note 16G双网通版',
        sell_price: 2199,
        thumb_path: 'https://www.escook.cn/vuebase/pics/3.png',
        done: true,
      },
    ],
  ],
})

// 设置静态用户信息
export function setUserInfo(): void {
  const userInfo = getData('userInfo')
  if (userInfo) {
    return
  }
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
}
setUserInfo()
