import axios from 'axios'
import config from '../config'
import { contactsRoute } from './routes'

const apiClient = axios.create({
  baseURL: config.apiBaseUrl
})

export default apiClient

export const sendMessage = contact => apiClient.post(contactsRoute, contact)

export const logIn = async (email, password) => {
    const user = await apiClient.post('/user/log-in', {
      email,
      password,
    })
    
    localStorage.setItem('token', user.data.accessToken)
    console.log(user.data)
    return user.data;
  }
  
  export const register = user => apiClient.post('/user/add', user)
    
