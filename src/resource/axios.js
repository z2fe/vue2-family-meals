import axios from 'axios'

export function getAxios (settings, timeout = 10000) {
  const ins = axios.create(settings)
  axios.defaults.timeout = timeout
  setInterceptors(ins)
  return ins
}

function setInterceptors (axiosIns) {
  axiosIns.interceptors.request.use(req => {
    if (process.env.NODE_ENV !== 'production') {
      console.time(req.method.toUpperCase() + ' ' + req.url)
    }
    return req
  }, error => {
    console.error(error)
    return Promise.reject(error)
  })
  axiosIns.interceptors.response.use(res => {
    if (process.env.NODE_ENV !== 'production') {
      console.timeEnd(res.config.method.toUpperCase() + ' ' + res.config.url)
    }
    if (res.status >= 200 && res.status < 300 && !res.data.error_code) {
      return res.data
    }
    return Promise.reject(res)
  }, error => {
    console.error(error)
    return Promise.reject(error)
  })
}
