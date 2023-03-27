import {Button, TextField} from "@mui/material";
import styles from '../../Layout.module.scss';
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import NoAccount from "./NoAccount";
import {toast} from "react-toastify";

const Login = () => {


    const onSubmit = (e: any) => {
        e.preventDefault();
        toast.success("Zalogowano");
    }
    return(
        <AuthorizationWrapper>
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Hasło"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Powtórz hasło"
                />
                <Button variant="contained" type="submit">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapper>
    )
}

export default Login;
