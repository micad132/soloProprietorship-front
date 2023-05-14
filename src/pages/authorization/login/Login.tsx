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
}



const Login = () => {


    const [loginValues, setLoginValues] = useState<LoginType>(initialLoginValues);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const navigate = useNavigate();
    const onSubmit = (e: any) => {
        e.preventDefault();
        const result = validateLogin(loginValues);
        console.log('WYNIKI', loginValues);
        if(result.success) {
            toast.success("Zalogowano");
            setLoginValues(initialLoginValues);
            setErrorValues([]);
            setTimeout(() => navigate('/', { replace: true}), 1000);
        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            setErrorValues(errorArray as string[]);
            toast.error("Podano niepoprawne dane!");
        }


    }
    const {email, password} = loginValues;
    return(
        <AuthorizationWrapperComponent>
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                <TextFieldComponent
                    setLoginValues={({target: { value}}) => setLoginValues((prevState) => ({
                        ...prevState,
                        email: sanitizeData(value),
                    }))}
                    value={email}
                    isError={errorValues.includes('email')}
                    label='E-mail'
                    errorMsg='Niepoprawny email!'
                />

                <PasswordFieldComponent
                    value={password}
                    setPasswordValue={({target: { value}}) => setLoginValues((prevState) => ({
                        ...prevState,
                        password: sanitizeData(value),
                    }))}
                    isError={errorValues.includes('password')}
                    errorMsg='Niepoprawne hasło!'
                />
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapperComponent>
    )
}

export default Login;
