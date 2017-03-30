import { getAxios } from './axios'

const api = getAxios({
  baseURL: 'http://localhost:3000',
  'X-Custom-Header': 'test'
})

export default api
