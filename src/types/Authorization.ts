
export interface LoginType  {
    nick: string,
    password: string,
    code: string,
}

// export interface RegisterType extends LoginType  {
//     name: string,
//     email: string,
//     confirmPassword: string,
//     surname: string,
//     postalCode: string,
//     cityName: string,
// }


export interface RegisterType extends RegisterCreationType{
    confirmPassword: string,
}

export interface RegisterCreationType {
    username: string,
    email: string,
    userFirstName: string,
    userSecondName: string,
    password: string,
    pesel: string,
    address: string,
    phoneNumber: string,
    postalCode: string,
    use2FA: boolean,
}

export const INITIAL_REGISTER_TYPE_VALUES: RegisterType = {
    username: '',
    email: '',
    confirmPassword: '',
    userFirstName: '',
    userSecondName: '',
    password: '',
    pesel: '',
    address: '',
    phoneNumber: '',
    postalCode: '',
    use2FA: false,
}