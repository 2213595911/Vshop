export type CateType = {
  cid: number
  icon: string
  id: number
  text: string
  pid: number
  tb_cid: string
  child?: [
    {
      cid: number
      icon: string
      id: number
      text: string
      pid: number
      tb_cid: string
    }
  ]
}
