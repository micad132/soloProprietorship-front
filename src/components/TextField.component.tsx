import {TextField} from "@mui/material";
import ErrorComponentComponent from "./ErrorComponent.component";
import {Dispatch, SetStateAction} from "react";
import {sanitizeData} from "../services/validators";

interface Props {
    value: string | number,
    setValues?: Dispatch<SetStateAction<any>>;
    isError?: boolean,
    label: string,
    errorMsg: string,
    onInputChange?: any,
    fieldName: string,
}

const TextFieldComponent = ({value,setValues, isError, label, errorMsg, onInputChange, fieldName}: Props) => {


    const handleInputChange = (e: any) => {
        const {value} = e.target;

        console.log('VALUE', value, fieldName);
        if (setValues) {
            setValues((prevState: any) => ({
                ...prevState,
                [fieldName]: sanitizeData(value),
            }))
        }
        // onInputChange(fieldName,value);
    }

    return(
        <>
            <TextField
                id="outlined-required"
                label={label}
                value={value}
                onChange={(e) => handleInputChange(e)}
            />
            {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
        </>
    )
}

export default TextFieldComponent;
