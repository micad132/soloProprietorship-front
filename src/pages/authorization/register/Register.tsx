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
import {AuthService} from "../../../services/api/AuthService";


const initialRegisterValues: RegisterType = {
    nick: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    postalCode: '',
    cityName: '',
    code: '',
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

    const submitForm = async (e: any) => {
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
            const data = {
                username: 'michal',
                email: 'michal@michal.pl',
                role: 'CUSTOMER',
                userFirstName: 'michal',
                userSecondName: 'mosiolek',
                password: 'haslohaslo',
                pesel: '12345678901',
                use2FA: false,
            }
            const data2 = await AuthService.registerUser(data);
            toast.success("Pomyślnie zarejestrowano, za chwilę nastąpi przekierowanie na stronę logowania!");
            setTimeout(() => navigate('/login', { replace: true}), 1000);
        } else {
            console.log(result.error.errors);
            const errorArray = result.error.errors.map(error => error.path);
            console.log(errorArray.flat());
            setErrorValues(errorArray.flat() as string[]);
        }

    }
    const {nick,name,surname,email,password,confirmPassword,postalCode,cityName} = registerValues;
    // const registerNameError = errorValues.includes('forbiddenName') ?
    //     'Niewlasciwe znaki!'
    //     : errorValues.includes('name')
    //         ? 'Imię musi zawierać od 5 do 20 znaków!'
    //         : ''
    return(
            <AuthorizationWrapperComponent>
                <form onSubmit={(e) => submitForm(e)}>
                    <h1>Register</h1>
                    <TextFieldComponent
                        value={nick}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('nick')}
                        label='Nick'
                        errorMsg={'Niepoprawnie wprowadzony nick!'}
                        fieldName={'nick'}
                    />
                    <TextFieldComponent
                        value={email}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('email')}
                        label='E-mail'
                        errorMsg='Niepoprawnie wprowadzony email!'
                        fieldName='email'
                    />
                    <TextFieldComponent
                        value={name}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('name')}
                        label='Imię'
                        errorMsg={'Niepoprawnie wprowadzone imie!'}
                        fieldName={'name'}
                    />
                    <TextFieldComponent
                        value={surname}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('surname')}
                        label='Nazwisko'
                        errorMsg='Niepoprawnie wprowadzone nazwisko!'
                        fieldName={'surname'}
                    />
                    <PasswordFieldComponent
                        value={password}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('password')}
                        errorMsg='Niepoprawnie wprowadzone haslo!'
                        fieldName='password'
                        label='Haslo'
                    />
                    <PasswordFieldComponent
                        value={confirmPassword}
                        setPasswordValue={setRegisterValues}
                        isError={errorValues.includes('confirmPassword')}
                        errorMsg='Niepoprawnie wprowadzone haslo!'
                        fieldName='confirmPassword'
                        label='Potwierdz haslo'
                    />
                    <TextFieldComponent
                        value={postalCode}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('postalCode')}
                        label='Kod pocztowy'
                        errorMsg='Niepoprawnie wprowadzony kod pocztowy!'
                        fieldName='postalCode'
                    />
                    <TextFieldComponent
                        value={cityName}
                        setValues={setRegisterValues}
                        isError={errorValues.includes('cityName')}
                        label='Miasto'
                        errorMsg='Niepoprawnie wprowadzona nazwa miasta!'
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
