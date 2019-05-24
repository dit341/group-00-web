import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://localhost:3000/api'
  })
}
