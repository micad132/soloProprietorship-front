import {Button, TextField} from "@mui/material";
import styles from '../../Layout.module.scss';
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import NoAccount from "./NoAccount";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {validateLogin} from "../../../services/validators";
import {LoginType} from "../../../types/authorization";
import {useState} from "react";
import ErrorComponent from "../../../components/ErrorComponent";
import TextFieldComponent from "./components/TextField.component";
import PasswordFieldComponent from "./components/PasswordField.component";


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
            setTimeout(() => navigate('/', { replace: true}), 1000);
        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            setErrorValues(errorArray as string[]);
            toast.error("Podano niepoprawne dane!");
        }


    }
    return(
        <AuthorizationWrapper>
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                {/*<TextFieldComponent*/}
                {/*    setLoginValues={setLoginValues}*/}
                {/*    value={loginValues.email}*/}
                {/*    isError={errorValues.includes('email')}*/}
                {/*    label='E-mail'*/}
                {/*    errorMsg='Niepoprawny email!'*/}
                {/*/>*/}

                <PasswordFieldComponent
                    value={loginValues.password}
                    setPasswordValue={setLoginValues}
                    isError={errorValues.includes('password')}
                    errorMsg='Niepoprawne hasło!'
                />
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapper>
    )
}

export default Login;
