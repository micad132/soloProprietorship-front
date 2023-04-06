import {TextField} from "@mui/material";
import ErrorComponent from "../../../../components/ErrorComponent";
import {Dispatch, SetStateAction} from "react";
import {sanitizeData} from "../../../../services/validators";

interface Props {
    value: string,
    setLoginValues: Dispatch<SetStateAction<any>>;
    isError: boolean,
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
            {isError && <ErrorComponent errorMsg={errorMsg} />}
        </>
    )
}

export default TextFieldComponent;