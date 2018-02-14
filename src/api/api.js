import axios from 'axios'

let axiosInstance = axios.create({
  transformRequest: [(data) => {
    return data
  }],
  timeout: 2 * 1000,
  transformResponse: [function (res) {
    
    return res
  }],
  headers: {
    'Content-Type': 'application/json'
  }
})


/** 处理接口返回数据，不涉及业务层面 **/
axiosInstance.interceptors.response.use(res => {
  if(res){
    return JSON.parse(res.data)
  }
  return {}
}, err => {
  let msg = err.message
  console.error('[Exception]', msg)
  return Promise.reject(err)
})

export default axiosInstance
