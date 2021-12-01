// 获取localstorage数据
function getData(key: string): any {
  return JSON.parse(localStorage.getItem(key)!)
}

// 设置localstorage数据
function setData(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export { getData, setData }
