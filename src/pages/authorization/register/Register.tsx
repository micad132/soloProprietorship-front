import { useState } from 'react';
import {Button, TextField} from "@mui/material";
import NoAccount from "../login/NoAccount";
import AuthorizationWrapperComponent from "../../../components/AuthorizationWrapper.component";
import {validateRegister} from "../../../services/validators";
import {RegisterType} from "../../../types/Authorization";
import ErrorComponentComponent from "../../../components/ErrorComponent.component";
import TextFieldComponent from "../../../components/TextField.component";
import PasswordFieldComponent from "../../../components/PasswordField.component";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    code2FA: '',
}

const Register = () => {

    const [registerValues, setRegisterValues] = useState<RegisterType>(initialRegisterValues);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const navigate = useNavigate();

    const sanitizeData = (value: string): string => sanitize(value, { USE_PROFILES: { html: false }});

    const nameCheck = (name: string): boolean => name.includes('&');

    // const handleInputChange = (fieldName: string, value: string) => {
    //     console.log('FIELDNAME', fieldName);
    //     setRegisterValues((prevValues) => ({
    //         ...prevValues,
    //         [fieldName]: sanitizeData(value),
    //     }));
    // };

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
            <AuthorizationWrapperComponent>
                <form onSubmit={(e) => submitForm(e)}>
                    <h1>Register</h1>
                    <TextFieldComponent
                        value={name}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('name')}
                        label='Imię'
                        errorMsg={registerNameError}
                        fieldName={'name'}
                    />
                    <TextFieldComponent
                        value={surname}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('surname')}
                        label='Nazwisko'
                        errorMsg='Nazwisko musi zawierać od 5 do 20 znaków!'
                        fieldName={'surname'}
                    />
                    <TextFieldComponent
                        value={email}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('email')}
                        label='E-mail'
                        errorMsg='E-mail nie zgadza się z poprawnym formatem!'
                        fieldName='email'
                    />
                    <PasswordFieldComponent
                        value={password}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('password')}
                        errorMsg='Hasło musi zawierać od 5 do 20 znaków!'
                        fieldName={'password'}
                    />
                    <PasswordFieldComponent
                        value={confirmPassword}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('confirmPassword')}
                        errorMsg='Hasło musi zawierać od 5 do 20 znaków!'
                        fieldName={'confirmPassword'}
                    />
                    <TextFieldComponent
                        value={postalCode}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('postalCode')}
                        label='Kod pocztowy'
                        errorMsg='Kod pocztowy nie zgadza się z poprawnym formatem!'
                        fieldName='postalCode'
                    />
                    <TextFieldComponent
                        value={cityName}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('cityName')}
                        label='Miasto'
                        errorMsg='Miasto musi zawierać od 5 do 20 znaków'
                        fieldName='cityName'
                    />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Czy zastosować 2FA?" />
                    <Button
                        variant="contained"
                        type="submit"
                    >Zarejestruj się</Button>
                </form>
            </AuthorizationWrapperComponent>
    )
}

export default Register;
