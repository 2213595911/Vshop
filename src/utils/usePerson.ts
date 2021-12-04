import { reactive } from 'vue'
import { getData } from './useLocal'

// 用户信息
const userData = reactive({
  address: [],
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
  localStorage.setItem('userInfo', JSON.stringify(userData))
}
setUserInfo()
