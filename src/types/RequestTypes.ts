export interface CustomerRequestType  {
    name: string,
    surName: string,
    address: string,
    phoneNumber: string,
    email: string,
    idUser: number,
    idTransactions: number[],
}

export interface ProductRequestType {
    name: string,
    price: number,
}