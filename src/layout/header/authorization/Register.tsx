import { useState } from 'react';
import {Button, TextField} from "@mui/material";
import NoAccount from "./NoAccount";
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import {validateRegister} from "../../../services/validators";
import {RegisterType} from "../../../types/authorization";


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

    const submitForm = (e: any) => {
        e.preventDefault();
        validateRegister(registerValues);
        setRegisterValues(initialRegisterValues);
    }
    const {name,surname,email,password,confirmPassword,postalCode,cityName} = registerValues;
    return(
            <AuthorizationWrapper>
                <form onSubmit={(e) => submitForm(e)}>
                    <h1>Register</h1>
                    <TextField
                        required
                        id="outlined-required"
                        label="Imię"
                        value={name || ''}
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Nazwisko"
                        value={surname}
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            surname: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        value={email}
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                        }))}
                        type="email"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Hasło"
                        value={password}
                        type="password"
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            password: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Powtórz hasło"
                        value={confirmPassword}
                        type="password"
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            confirmPassword: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Kod pocztowy"
                        value={postalCode}
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            postalCode: e.target.value,
                        }))}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Miasto"
                        value={cityName}
                        onChange={(e) => setRegisterValues((prevState) => ({
                            ...prevState,
                            cityName: e.target.value,
                        }))}
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
