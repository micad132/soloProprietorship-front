import { useState } from 'react';
import {Button, TextField} from "@mui/material";
import NoAccount from "./NoAccount";
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import {validateRegister} from "../../../services/validators";
import {RegisterType} from "../../../types/authorization";
import ErrorComponent from "../../../components/ErrorComponent";
import TextFieldComponent from "./components/TextField.component";
import PasswordFieldComponent from "./components/PasswordField.component";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import { sanitize } from 'dompurify';


const initialRegisterValues: RegisterType = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    postalCode: '',
    cityName: '',
}

const Register = () => {

    const [registerValues, setRegisterValues] = useState<RegisterType>(initialRegisterValues);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const navigate = useNavigate();

    const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false }});

    const nameCheck = (name: string): boolean => name.includes('&');

    const submitForm = (e: any) => {
        e.preventDefault();

        console.log('STAN', registerValues);
        const result = validateRegister(registerValues);
        if (result.success) {
            console.log(registerValues.name);
            if(nameCheck(registerValues.name)) {
                console.log('WHAT');
                toast.success("jd");
            }
            setRegisterValues(initialRegisterValues);
            toast.success("Pomyślnie zarejestrowano, za chwilę nastąpi przekierowanie na stronę logowania!");
            setTimeout(() => navigate('/login', { replace: true}), 1000);
        } else {
            console.log(result.error.errors);
            const errorArray = result.error.errors.map(error => error.path);
            console.log(errorArray.flat());
            setErrorValues(errorArray.flat() as string[]);
        }
    }
    const {name,surname,email,password,confirmPassword,postalCode,cityName} = registerValues;
    const registerNameError = errorValues.includes('forbiddenName') ?
        'Niewlasciwe znaki!'
        : errorValues.includes('name')
            ? 'Imię musi zawierać od 5 do 20 znaków!'
            : ''
    return(
            <AuthorizationWrapper>
                <form onSubmit={(e) => submitForm(e)}>
                    <h1>Register</h1>
                    <TextFieldComponent
                        value={name}
                        setLoginValues={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            name: sanitizeData(value),
                        }))}
                        isError={errorValues.includes('name')}
                        label='Imię'
                        errorMsg={registerNameError}
                    />
                    <TextFieldComponent
                        value={surname}
                        setLoginValues={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            surname: value,
                        }))}
                        isError={errorValues.includes('surname')}
                        label='Nazwisko'
                        errorMsg='Nazwisko musi zawierać od 5 do 20 znaków!'
                    />
                    <TextFieldComponent
                        value={email}
                        setLoginValues={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            email: value,
                        }))}
                        isError={errorValues.includes('email')}
                        label='E-mail'
                        errorMsg='E-mail nie zgadza się z poprawnym formatem!'
                    />
                    <PasswordFieldComponent
                        value={password}
                        setPasswordValue={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            password: value,
                        }))}
                        isError={errorValues.includes('password')}
                        errorMsg='Hasło musi zawierać od 5 do 20 znaków!'
                    />
                    <PasswordFieldComponent
                        value={confirmPassword}
                        setPasswordValue={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            confirmPassword: value,
                        }))}
                        isError={errorValues.includes('confirmPassword')}
                        errorMsg='Hasło musi zawierać od 5 do 20 znaków!'
                    />
                    <TextFieldComponent
                        value={postalCode}
                        setLoginValues={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            postalCode: value,
                        }))}
                        isError={errorValues.includes('postalCode')}
                        label='Kod pocztowy'
                        errorMsg='Kod pocztowy nie zgadza się z poprawnym formatem!'
                    />
                    <TextFieldComponent
                        value={cityName}
                        setLoginValues={({target: { value}}) => setRegisterValues((prevState) => ({
                            ...prevState,
                            cityName: value,
                        }))}
                        isError={errorValues.includes('cityName')}
                        label='Miasto'
                        errorMsg='Miasto musi zawierać od 5 do 20 znaków'
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >Zarejestruj się</Button>
                </form>
            </AuthorizationWrapper>
    )
}

export default Register;
