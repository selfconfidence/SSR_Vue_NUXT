import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: "http://192.168.238.166:7300/mock/5c768cf6df7e1f0ee717ace4/excavate", // api 的 base_url
    timeout: 30000 // 请求超时时间
  })

 export default service 