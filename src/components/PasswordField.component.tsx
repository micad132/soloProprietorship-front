import {TextField} from "@mui/material";
import ErrorComponentComponent from "./ErrorComponent.component";
import {Dispatch, SetStateAction} from "react";
import {LoginType} from "../types/Authorization";

interface Props {
    value: string,
    setPasswordValue: Dispatch<SetStateAction<any>>;
    isError: boolean,
    errorMsg: string,
    onInputChange?: any,
    fieldName: string,
}
const PasswordFieldComponent = ({value,setPasswordValue, isError, errorMsg, onInputChange, fieldName}: Props) => {

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        console.log('NAME', name);
        console.log('VALUE', value);
        // setLoginValues((prevState: any) => ({
        //     ...prevState,
        //     [name]: sanitizeData(value),
        // }))
        onInputChange(fieldName,value);
    }
    return(
        <>
            <TextField
                id="outlined-required"
                label="Hasło"
                type="password"
                value={value}
                onChange={(e) => handleInputChange(e)}
            />
            {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
        </>
    )
}

export default PasswordFieldComponent;
