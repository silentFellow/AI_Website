import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ai-website-29p2.onrender.com'
})

export default instance