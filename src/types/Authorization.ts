
export interface LoginType  {
    nick: string,
    password: string,
    code: string,
}

export interface RegisterType extends LoginType  {
    name: string,
    email: string,
    confirmPassword: string,
    surname: string,
    postalCode: string,
    cityName: string,
}

export interface RegisterCreationType {
    username: string,
    email: string,
    role: string,
    userFirstName: string,
    userSecondName: string,
    password: string,
    pesel: string,
    use2FA: boolean,
}
