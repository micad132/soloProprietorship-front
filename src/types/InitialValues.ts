import { type JobAddRequestType } from './RequestTypes'
import { type UserDetailsDTO } from './ResponseTypes'
import { type LoginWithoutCodeType } from './Authorization'

export const INITIAL_ADD_JOB_REQUEST_VALUES: JobAddRequestType = {
  name: '',
  price: 0
}

export const INITIAL_FULL_JOB_TYPE = {
  id: 0,
  name: '',
  price: 0
}

export const INITIAL_ADD_PRODUCT_REQUEST_TYPE = {
  name: '',
  price: 0,
  weight: 0
}

export const INITIAL_FULL_PRODUCT_TYPE = {
  id: 0,
  name: '',
  price: 0,
  weight: 0
}

export const INITIAL_ADD_CUSTOMER_REQUEST_TYPE = {
  name: '',
  surName: '',
  address: '',
  phoneNumber: '',
  email: ''
}

export const INITIAL_EDIT_CUSTOMER_REQUEST_TYPE = {
  id: 0,
  name: '',
  surName: '',
  address: '',
  phoneNumber: '',
  email: ''
}

export const INITIAL_ADD_TRANSACTION_REQUEST_TYPE = {
  price: 0,
  description: '',
  idCustomer: '',
  idOfProducts: [],
  idOfJobs: []
}

export const INITIAL_USER_DETAILS_DTO: UserDetailsDTO = {
  email: '',
  phoneNumber: '',
  pesel: '',
  firstName: '',
  surName: '',
  address: '',
  using2FA: false

}

export const INITIAL_USER_WITHOUT_CODE_VALUES: LoginWithoutCodeType = {
  userName: '',
  password: ''
}
