/* eslint-env jest */

import { API_REQUEST_PATH } from '../utils/GlobalVariables'
import { INITIAL_ADD_JOB_REQUEST_VALUES } from '../types/InitialValues'
import { INITIAL_REGISTER_TYPE_VALUES } from '../types/Authorization'

it('api request path is correct', () => {
  expect(API_REQUEST_PATH).toBe('http://localhost:8080/api')
})

it('should have proper initial values', () => {
  const initialValues = { name: '', price: 0 }
  expect(INITIAL_ADD_JOB_REQUEST_VALUES).toStrictEqual(initialValues)
})

it('should have proper initial register values', () => {
  const initialRegisterValues = {
    username: '',
    email: '',
    confirmPassword: '',
    userFirstName: '',
    userSecondName: '',
    password: '',
    pesel: '',
    address: '',
    phoneNumber: '',
    postalCode: '',
    use2FA: false
  }
  expect(INITIAL_REGISTER_TYPE_VALUES).toStrictEqual(initialRegisterValues)
})
