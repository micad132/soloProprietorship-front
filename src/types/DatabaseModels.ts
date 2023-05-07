export interface TransactionType {
    idTransaction: number,
    price: number,
    description: string,
    user: UserType,
    customer: CustomerType,
    products: ProductType[],
    jobs: JobType[],

}

export interface JobType {
    idJob: number,
    name: string,
    price: number,
    user: UserType,
    transactions: TransactionType[],
}

export interface CustomerType {
    idCustomer: number,
    name: string,
    surName: string,
    address: string,
    phoneNumber: string,
    email: string,
    user: UserType,
    transactions: TransactionType[],
}

export interface UserType {
    idUser: number,
    phoneNumber: string,
    pesel: string,
    firstName: string,
    surName: string,
    address: string,
}

export interface ProductType {
    idProduct: number,
    name: string,
    price: number,
    weight: number,
    User: UserType,
    transactions: TransactionType[],
}