import axios from 'axios'
import { type RegisterCreationType } from '../../types/Authorization'

export const AuthService = {

  registerUser: async (data: RegisterCreationType) => {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8080/auth/signup',
      data
    })
    return res.data
  },
  // loginUser: async (data: any) => {
  //     const res = await axios({
  //         method: 'POST',
  //         url: `http://localhost:8080/auth/signin`,
  //         data,
  //     })
  //     return res.data;
  // }

  loginUser: async (data: any) => await axios({
    method: 'POST',
    url: 'http://localhost:8080/auth/signin',
    data
  }),

  verify2FA: async (data: any) => await axios({
    method: 'POST',
    url: 'http://localhost:8080/auth/signin/verify2FA',
    data
  }),

  getLoggedUser: async () => await axios.get('http://localhost:8080/api/user')
}
