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
    weight: number,
}

export interface JobRequestType {
    name: string,
    price: number,
    isJobDone: boolean,
}

export const INITIAL_JOB_VALUES: JobRequestType = {
    name: '',
    price: 0,
    isJobDone: false,
}
