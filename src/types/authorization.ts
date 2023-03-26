
export interface LoginType  {
    email: string,
    password: string,
    confirmPassword: string,
}

export interface RegisterType extends LoginType  {
    name: string,
    surname: string,
    postalCode: string,
    cityName: string,
}
