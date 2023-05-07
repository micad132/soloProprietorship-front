import {JobType, ProductType} from "./DatabaseModels";

export interface ProductDTO {
    idProduct: number,
    name: string,
    price: number,
    weight: number,
}

export interface UserDTO {
    idUser: number,
    email: string,
    phoneNumber: string,
    pesel: string,
    firstName: string,
    surName: string,
    address: string,
}

export interface CustomerDTO {
    idCustomer: number,
    name: string,
    surName: string,
    address: string,
    phoneNumber: string,
    email: string,
}

export interface TransactionDTO {
    idTransaction: number,
    date: string,
    price: number,
    description: string,
    customerName: string,
    numberOfProducts: number,
    numberOfJobs: number,
    products: ProductType[],
    jobs: JobType[],
}