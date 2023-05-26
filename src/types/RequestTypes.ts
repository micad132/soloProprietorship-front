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
    id: number,
}

export interface JobAddRequestType {
    name: string,
    price: number,
}

export interface JobEditRequestType extends JobAddRequestType {
    id: number,
}
