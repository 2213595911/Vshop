import { reactive } from 'vue'
const nav = reactive([
  {
    path: '/news',
    picture: require('@/assets/images/1.jpeg'),
    title: '新闻咨询',
  },
  {
    path: '/images/1',
    picture: require('@/assets/images/2.jpeg'),
    title: '图片分享',
  },
  {
    path: '/goods',
    picture: require('@/assets/images/3.jpeg'),
    title: '商品购买',
  },
  {
    path: '/news',
    picture: require('@/assets/images/4.jpeg'),
    title: '留言反馈',
  },
  {
    path: '/images/1',
    picture: require('@/assets/images/5.jpeg'),
    title: '视频专区',
  },
  {
    path: '/goods',
    picture: require('@/assets/images/6.jpeg'),
    title: '联系我们',
  },
])

// 格式化日期
function addZero(num: string | number): string {
  if (parseInt(num as string) < 10) {
    num = '0' + num
  }
  return num as string
}
function getMyDate(date: string | number): string {
  let oDate = new Date(date),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSen = oDate.getSeconds(),
    oTime = `${oYear}-${addZero(oMonth)}-${addZero(oDay)} ${addZero(oHour)}:${addZero(oMin)}:${addZero(oSen)}`
  return oTime
}
export { nav, getMyDate }
