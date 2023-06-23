import React, { type ReactElement, useState } from 'react'
import { Button } from '@mui/material'
import AuthorizationWrapperComponent from '../../../components/AuthorizationWrapper.component'
import { validateRegister } from '../../../services/validators'
import { INITIAL_REGISTER_TYPE_VALUES, type RegisterType } from '../../../types/Authorization'
import TextFieldComponent from '../../../components/TextField.component'
import PasswordFieldComponent from '../../../components/PasswordField.component'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { sanitize } from 'dompurify'
import { AuthService } from '../../../services/api/AuthService'
import { useAppDispatch } from '../../../utils/hooks'
import { setqrURL } from '../../../store/reducers/utilsReducer'

const Register = (): ReactElement => {
  const [registerValues, setRegisterValues] = useState<RegisterType>(INITIAL_REGISTER_TYPE_VALUES)
  const [errorValues, setErrorValues] = useState<string[]>([])
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false } })

  const nameCheck = (name: string): boolean => name.includes('&')

  const { username, email, userFirstName, userSecondName, password, confirmPassword, pesel, address, phoneNumber, use2FA, postalCode } = registerValues

  // const handleInputChange = (fieldName: string, value: string) => {
  //     console.log('FIELDNAME', fieldName);
  //     setRegisterValues((prevValues) => ({
  //         ...prevValues,
  //         [fieldName]: sanitizeData(value),
  //     }));
  // };

  const submitForm = async (e: any): Promise<any> => {
    e.preventDefault()

    console.log('STAN', registerValues)
    const result = validateRegister(registerValues)
    if (result.success) {
      console.log(registerValues.username)
      if (nameCheck(registerValues.username)) {
        console.log('WHAT')
        toast.success('jd')
      }
      setRegisterValues(INITIAL_REGISTER_TYPE_VALUES)
      const data: any = {
        username,
        email,
        userFirstName,
        userSecondName,
        password,
        pesel,
        address,
        phoneNumber,
        use2FA
      }
      const data2 = await AuthService.registerUser(data)
      console.log('RES', data2)
      void dispatch(setqrURL(data2.message))
      toast.success('Pomyślnie zarejestrowano, za chwilę nastąpi przekierowanie na stronę logowania!')
      // setTimeout(() => navigate('/login', { replace: true}), 1000);
    } else {
      console.log(result.error.errors)
      const errorArray = result.error.errors.map((error) => error.path)
      console.log(errorArray.flat())
      setErrorValues(errorArray.flat() as string[])
    }
  }
  // const registerNameError = errorValues.includes('forbiddenName') ?
  //     'Niewlasciwe znaki!'
  //     : errorValues.includes('name')
  //         ? 'Imię musi zawierać od 5 do 20 znaków!'
  //         : ''
  return (
            <AuthorizationWrapperComponent>
                <form onSubmit={(e) => { void submitForm(e) } }>
                    <h1>Register</h1>
                    <TextFieldComponent
                        value={username}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('username')}
                        label='Nick'
                        errorMsg={'Niepoprawnie wprowadzony nick!'}
                        fieldName={'username'}
                    />
                    <TextFieldComponent
                        value={email}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('email')}
                        label='E-mail'
                        errorMsg='Niepoprawnie wprowadzony email!'
                        fieldName='email'
                    />
                    <TextFieldComponent
                        value={userFirstName}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('userFirstName')}
                        label='Imię'
                        errorMsg={'Niepoprawnie wprowadzone imie!'}
                        fieldName={'userFirstName'}
                    />
                    <TextFieldComponent
                        value={userSecondName}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('userSecondName')}
                        label='Nazwisko'
                        errorMsg='Niepoprawnie wprowadzone nazwisko!'
                        fieldName={'userSecondName'}
                    />
                    <PasswordFieldComponent
                        value={password}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('password')}
                        errorMsg='Niepoprawnie wprowadzone haslo!'
                        fieldName='password'
                        label='Haslo'
                    />
                    <PasswordFieldComponent
                        value={confirmPassword}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('confirmPassword')}
                        errorMsg='Niepoprawnie wprowadzone haslo!'
                        fieldName='confirmPassword'
                        label='Potwierdz haslo'
                    />
                    <TextFieldComponent
                        value={phoneNumber}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('phoneNumber')}
                        label='Numer telefonu'
                        errorMsg='Niepoprawnie wprowadzony numer telefonu!'
                        fieldName='phoneNumber'
                    />
                    <TextFieldComponent
                        value={pesel}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('pesel')}
                        label='Pesel'
                        errorMsg='Niepoprawnie wprowadzony pesel!'
                        fieldName='pesel'
                    />
                    <TextFieldComponent
                        value={postalCode}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('postalCode')}
                        label='Kod pocztowy'
                        errorMsg='Niepoprawnie wprowadzony kod pocztowy!'
                        fieldName='postalCode'
                    />
                    <TextFieldComponent
                        value={address}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('address')}
                        label='Miasto'
                        errorMsg='Niepoprawnie wprowadzona nazwa miasta!'
                        fieldName='address'
                    />
                    <FormControlLabel control={<Checkbox onChange={(e) => {
                      setRegisterValues((prevState) => ({
                        ...prevState,
                        use2FA: e.target.checked
                      }))
                    } } />} label="Czy zastosować 2FA?" />
                    <Button
                        variant="contained"
                        type="submit"
                    >Zarejestruj się</Button>
                </form>
            </AuthorizationWrapperComponent>
  )
}

export default Register
