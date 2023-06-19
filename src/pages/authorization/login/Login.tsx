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
import {AuthService} from "../../../services/api/AuthService";
import {getQRURL, setToken} from "../../../store/reducers/utilsReducer";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";


const initialLoginValues: LoginType = {
    nick: '',
    password: '',
    code: '',
}



const Login = () => {


    const [loginValues, setLoginValues] = useState<LoginType>(initialLoginValues);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const qrURL = useAppSelector(getQRURL);
    console.log(qrURL);

    // const handleInputChange = (fieldName: string, value: string) => {
    //     console.log('FIELDNAME', fieldName);
    //     setLoginValues((prevValues) => ({
    //         ...prevValues,
    //         [fieldName]: sanitizeData(value),
    //     }));
    // };
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const result = validateLogin(loginValues);
        console.log('WYNIKI', loginValues);
        console.log('TYP', typeof loginValues.code);
        console.log('RESULT', result);
        if(result.success) {
            setLoginValues(initialLoginValues);
            setErrorValues([]);
            const data = {
                userName: loginValues.nick,
                password: loginValues.password,
                code: loginValues.code,
            }
            const userStr = localStorage.getItem("user");
            let user = null;
            if (userStr) {
                user = JSON.parse(userStr);
                console.log(user.accessToken);
            }

            try {
                const res = await AuthService.loginUser(data);
                toast.success("Zalogowano!");
                setTimeout(() => navigate('/', { replace: true}), 1000);
                
            } catch (e) {
               toast.error('Niepoprawne dane logowania!');
            }
            
            // localStorage.setItem('ABC', JSON.stringify(res.token));
            // console.log('RES', res.token);
            // dispatch(setToken(res.token));

        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            console.log(errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Podano niepoprawne dane!");
        }


    }
    const {nick, password, code} = loginValues;
    return(
        <AuthorizationWrapperComponent>
            <form  onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                <TextFieldComponent
                    setValues={setLoginValues}
                    value={nick}
                    isError={errorValues.includes('nick')}
                    label='Nick'
                    errorMsg='Niepoprawny nick!'
                    fieldName={'nick'}
                />

                <PasswordFieldComponent
                    value={password}
                    setPasswordValue={setLoginValues}
                    isError={errorValues.includes('password')}
                    errorMsg='Niepoprawne hasło!'
                    fieldName={'password'}
                    label='Haslo'
                />
                <TextFieldComponent
                    setValues={setLoginValues}
                    value={code}
                    isError={errorValues.includes('code2FA')}
                    label='Kod 2FA'
                    errorMsg='Niepoprawny kod!'
                    fieldName={'code'}
                />
                {qrURL && <img src={qrURL}  alt='QR CODE' />}
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapperComponent>
    )
}

export default Login;
