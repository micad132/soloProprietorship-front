import {TextField} from "@mui/material";
import ErrorComponentComponent from "./ErrorComponent.component";
import {Dispatch, SetStateAction} from "react";
import {LoginType} from "../types/Authorization";
import {sanitizeData} from "../services/validators";

interface Props {
    value: string,
    setPasswordValue: Dispatch<SetStateAction<any>>;
    isError: boolean,
    errorMsg: string,
    onInputChange?: any,
    fieldName: string,
    label: string,
}
const PasswordFieldComponent = ({value,setPasswordValue, isError, errorMsg, onInputChange, fieldName, label}: Props) => {

    const handleInputChange = (e: any) => {
        const {name, value} = e.target;

        console.log('NAME', name);
        console.log('VALUE', value);
        setPasswordValue((prevState: any) => ({
            ...prevState,
            [fieldName]: sanitizeData(value),
        }))
        // onInputChange(fieldName,value);
    }
    return(
        <>
            <TextField
                id="outlined-required"
                label={label}
                type="password"
                value={value}
                onChange={(e) => handleInputChange(e)}
            />
            {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
        </>
    )
}

export default PasswordFieldComponent;
