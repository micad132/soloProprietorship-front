import {Button, TextField} from "@mui/material";
import styles from '../../Layout.module.scss';
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";
import NoAccount from "./NoAccount";

const Login = () => {
    return(
        <AuthorizationWrapper>
            <form>
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
                <Button variant="contained">Zaloguj się</Button>
                <NoAccount />
            </form>
        </AuthorizationWrapper>
    )
}

export default Login;
