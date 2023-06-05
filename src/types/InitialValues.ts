import {JobAddRequestType} from "./RequestTypes";

export const INITIAL_ADD_JOB_REQUEST_VALUES: JobAddRequestType = {
    name: '',
    price: 0,
}

export const INITIAL_EDIT_JOB_REQUEST_TYPE = {
    id: 0,
    name: '',
    price: 0,
}

export const INITIAL_ADD_PRODUCT_REQUEST_TYPE = {
    name: '',
    price: 0,
    weight: 0,
}

export const INITIAL_EDIT_PRODUCT_REQUEST_TYPE = {
    id: 0,
    name: '',
    price: 0,
    weight: 0,
}

export const INITIAL_ADD_CUSTOMER_REQUEST_TYPE = {
    name: '',
    surname: '',
    address: '',
    phoneNumber: '',
    email: '',
}

export const INITIAL_EDIT_CUSTOMER_REQUEST_TYPE = {
    id: 0,
    name: '',
    surname: '',
    address: '',
    phoneNumber: '',
    email: '',
}

export const INITIAL_ADD_TRANSACTION_REQUEST_TYPE = {
    price: 0,
    description: '',
    idCustomer: '',
    idOfProducts: [],
    idOfJobs: []
}