import axios from 'axios'
import config from './config'

const {DEV_BASEURL} = config
const instance = axios.create({
    baseURL: DEV_BASEURL,
    timeout: 5000
})

instance.interceptors.response.use((res) => {
    if (res.status === 200) {
        return res.data
    }
    console.log(res)
}, (error) => {
    return Promise.reject(error)
})


export default instance
