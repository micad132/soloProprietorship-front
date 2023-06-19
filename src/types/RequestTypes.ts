export interface CustomerRequestType  {
    name: string,
    surName: string,
    address: string,
    phoneNumber: string,
    email: string,
    idUser: number,
    idTransactions: number[],
}

export interface ProductAddRequestType {
    name: string,
    price: number,
    weight: number,
}

export interface ProductEditRequestType extends  ProductAddRequestType{
    idProduct: number,
}

export interface JobAddRequestType {
    name: string,
    price: number,
}

export interface JobEditRequestType extends JobAddRequestType {
    idJob: number,
}

export interface CustomerAddRequestType {
    name: string,
    surName: string,
    address: string,
    phoneNumber: string,
    email: string,
}

export interface CustomerEditRequestType extends CustomerAddRequestType {
    idCustomer: number,
}


export interface DeletingType {
    id: number,
    code: string,
}

export interface TransactionAddRequestType {
    price: number,
    description: string,
    idCustomer: string,
    idOfProducts: number[],
    idOfJobs: number[],
}
