import { Button } from '@mui/material'
import AuthorizationWrapperComponent from '../../../components/AuthorizationWrapper.component'
import NoAccount from './NoAccount'
import { toast } from 'react-toastify'
import { validateLogin } from '../../../services/validators'
import { type LoginType } from '../../../types/Authorization'
import React, { type ReactElement, useState } from 'react'
import TextFieldComponent from '../../../components/TextField.component'
import PasswordFieldComponent from '../../../components/PasswordField.component'
import { AuthService } from '../../../services/api/AuthService'
import { fetchUserDetails, setqrURL, setUserData } from '../../../store/reducers/utilsReducer'
import { useAppDispatch } from '../../../utils/hooks'
import { useNavigate } from 'react-router-dom'
import { fetchingAllProductsThunk } from '../../../store/reducers/productReducer'
import { fetchAllJobsThunk } from '../../../store/reducers/jobReducer'
import { fetchAllCustomersThunk } from '../../../store/reducers/customerReducer'
import { fetchingTransactionsThunk } from '../../../store/reducers/transactionReducer'
import axios from 'axios'

const initialLoginValues: LoginType = {
  nick: '',
  password: '',
  code: ''
}

const Login = (): ReactElement => {
  const [loginValues, setLoginValues] = useState<LoginType>(initialLoginValues)
  const [errorValues, setErrorValues] = useState<string[]>([])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // const handleInputChange = (fieldName: string, value: string) => {
  //     console.log('FIELDNAME', fieldName);
  //     setLoginValues((prevValues) => ({
  //         ...prevValues,
  //         [fieldName]: sanitizeData(value),
  //     }));
  // };
  const onSubmit = async (e: any): Promise<any> => {
    e.preventDefault()
    const result = validateLogin(loginValues)
    if (result.success) {
      setLoginValues(initialLoginValues)
      setErrorValues([])
      const data = {
        userName: loginValues.nick,
        password: loginValues.password,
        code: loginValues.code
      }

      try {
        const qrCode = await AuthService.verify2FA(data)
        if (qrCode.data.isUsed) {
          const userData = {
            userName: loginValues.nick,
            password: loginValues.password
          }
          dispatch(setqrURL(qrCode.data.qr))
          dispatch(setUserData(userData))
          navigate('/code', { replace: true })
        } else {
          const res = await AuthService.loginUser(data)
          if (res.status === 200) {
            void dispatch(fetchUserDetails())
            toast.success('Zalogowano!')
            void dispatch(fetchingAllProductsThunk())
            void dispatch(fetchAllJobsThunk())
            void dispatch(fetchAllCustomersThunk())
            void dispatch(fetchingTransactionsThunk())
            setTimeout(() => { navigate('/', { replace: true }) }, 1000)
          }
        }
      } catch (e) {
        console.log('ERROR', e)
        toast.error('Niepoprawne dane logowania!')
      }

      // localStorage.setItem('ABC', JSON.stringify(res.token));
      // console.log('RES', res.token);
      // dispatch(setToken(res.token));
    } else {
      const errorArray = result.error.errors.map((error: any) => error.path[0])
      setErrorValues(errorArray as string[])
      toast.error('Podano niepoprawne dane!')
    }
  }
  const { nick, password } = loginValues

  const config = {
    headers: { Authorization: 'Bearer  eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYW5pZWwiLCJpYXQiOjE2ODc2ODk2MDAsImV4cCI6MTY4Nzc3NjAwMH0.EFqUxk8Sc6coaWJdTCXPNSFToOYRrq4PSar8L-VIog-J1_kdAGniy5K51NVB7aH6seZysOQItHtM7zrylJO9xw' }
  }
  return (
        <AuthorizationWrapperComponent>
            {/* eslint-disable-next-line no-void */}
            <form onSubmit={(e) => void onSubmit(e) }>
                <h1>Login</h1>
                <TextFieldComponent
                    setValues={setLoginValues}
                    value={nick}
                    isError={errorValues.includes('nick')}
                    label='Nick'
                    errorMsg='Niepoprawny nick!'
                    fieldName={'nick'}
                />

                <PasswordFieldComponent
                    value={password}
                    setPasswordValue={setLoginValues}
                    isError={errorValues.includes('password')}
                    errorMsg='Niepoprawne hasło!'
                    fieldName={'password'}
                    label='Haslo'
                />
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
                <Button
                  onClick={() => {
                    void axios.get('http://localhost:8080/api/product/products', config).then(res => { console.log(res) })
                  }
                  }
                >
                  TEST
                </Button>
            </form>
        </AuthorizationWrapperComponent>
  )
}

export default Login
