
export interface LoginType  {
    email: string,
    password: string,
    code2FA: string,
}

export interface RegisterType extends LoginType  {
    name: string,
    confirmPassword: string,
    surname: string,
    postalCode: string,
    cityName: string,
}
