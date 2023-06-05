export interface ProductResponseType {
    idProduct: number,
    name: string,
    price: number,
    weight: number,
}

export interface TransactionType {
    idTransaction: number,
    date: string,
    price: number,
    description: string,
    customerName: string,
    numberOfProducts: number,
    numberOfJobs: number,
    products: ProductResponseType[],
    jobs: JobType[],

}

export interface JobType {
    idJob: number,
    name: string,
    price: number,
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
