import {TextField} from "@mui/material";
import ErrorComponentComponent from "./ErrorComponent.component";
import {Dispatch, SetStateAction} from "react";
import {sanitizeData} from "../services/validators";

interface Props {
    value: string | number,
    setLoginValues?: Dispatch<SetStateAction<any>>;
    isError?: boolean,
    label: string,
    errorMsg: string,
}

const TextFieldComponent = ({value,setLoginValues, isError, label, errorMsg}: Props) => {

    return(
        <>
            <TextField
                id="outlined-required"
                label={label}
                value={value}
                onChange={setLoginValues}
            />
            {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
        </>
    )
}

export default TextFieldComponent;
