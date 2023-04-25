import {TextField} from "@mui/material";
import ErrorComponent from "./ErrorComponent";
import {Dispatch, SetStateAction} from "react";
import {LoginType} from "../types/authorization";

interface Props {
    value: string,
    setPasswordValue: Dispatch<SetStateAction<any>>;
    isError: boolean,
    errorMsg: string,
}
const PasswordFieldComponent = ({value,setPasswordValue, isError, errorMsg}: Props) => {

    return(
        <>
            <TextField
                id="outlined-required"
                label="Hasło"
                type="password"
                value={value}
                onChange={setPasswordValue}
            />
            {isError && <ErrorComponent errorMsg={errorMsg} />}
        </>
    )
}

export default PasswordFieldComponent;
