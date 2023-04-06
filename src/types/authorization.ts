
export interface LoginType  {
    email: string,
    password: string,
}

export interface RegisterType extends LoginType  {
    name: string,
    confirmPassword: string,
    surname: string,
    postalCode: string,
    cityName: string,
}
