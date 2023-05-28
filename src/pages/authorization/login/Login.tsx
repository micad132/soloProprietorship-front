import {Button, TextField} from "@mui/material";
import styles from '../../../layout/Layout.module.scss';
import AuthorizationWrapperComponent from "../../../components/AuthorizationWrapper.component";
import NoAccount from "./NoAccount";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {sanitizeData, validateLogin} from "../../../services/validators";
import {LoginType} from "../../../types/Authorization";
import {useState} from "react";
import ErrorComponentComponent from "../../../components/ErrorComponent.component";
import TextFieldComponent from "../../../components/TextField.component";
import PasswordFieldComponent from "../../../components/PasswordField.component";


const initialLoginValues: LoginType = {
    email: '',
    password: '',
    code2FA: '',
}



const Login = () => {


    const [loginValues, setLoginValues] = useState<LoginType>(initialLoginValues);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const navigate = useNavigate();


    const handleInputChange = (fieldName: string, value: string) => {
        console.log('FIELDNAME', fieldName);
        setLoginValues((prevValues) => ({
            ...prevValues,
            [fieldName]: sanitizeData(value),
        }));
    };
    const onSubmit = (e: any) => {
        e.preventDefault();
        const result = validateLogin(loginValues);
        console.log('WYNIKI', loginValues);
        console.log('TYP', typeof loginValues.code2FA);
        console.log('RESULT', result);
        if(result.success) {
            toast.success("Zalogowano");
            setLoginValues(initialLoginValues);
            setErrorValues([]);
            setTimeout(() => navigate('/', { replace: true}), 1000);
        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            console.log(errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Podano niepoprawne dane!");
        }


    }
    const {email, password, code2FA} = loginValues;
    return(
        <AuthorizationWrapperComponent>
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                <TextFieldComponent
                    setValues={setLoginValues}
                    value={email}
                    isError={errorValues.includes('email')}
                    label='E-mail'
                    errorMsg='Niepoprawny email!'
                    onInputChange={handleInputChange}
                    fieldName={'email'}
                />

                <PasswordFieldComponent
                    value={password}
                    setPasswordValue={setLoginValues}
                    isError={errorValues.includes('password')}
                    errorMsg='Niepoprawne hasło!'
                    fieldName={'password'}
                    onInputChange={handleInputChange}
                />
                <TextFieldComponent
                    setValues={setLoginValues}
                    value={code2FA}
                    isError={errorValues.includes('code2FA')}
                    label='Kod 2FA'
                    errorMsg='Niepoprawny kod!'
                    onInputChange={handleInputChange}
                    fieldName={'code2FA'}
                />
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapperComponent>
    )
}

export default Login;
