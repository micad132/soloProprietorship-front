import {Button, TextField} from "@mui/material";
import NoAccount from "./NoAccount";
import AuthorizationWrapper from "../../../components/AuthorizationWrapper";

const Register = () => {

    return(
            <AuthorizationWrapper>
                <form>
                    <h1>Register</h1>
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
                    <TextField
                        required
                        id="outlined-required"
                        label="Powtórz hasło"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Powtórz hasło"
                    />
                    <Button variant="contained">Zarejestruj się</Button>
                    <NoAccount />
                </form>
            </AuthorizationWrapper>
    )
}

export default Register;
