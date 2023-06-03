import TextFieldComponent from "../../../components/TextField.component";
import {Button} from "@mui/material";
import {JobAddRequestType} from "../../../types/RequestTypes";

interface Props {
    data: JobAddRequestType,
    setJobValues: any,
    onClick: () => void,
    errorValues: string[],
}
const JobFieldsComponent = ({data, setJobValues, onClick, errorValues}: Props) => {

    const {name, price} = data;
    return(
        <>
            <TextFieldComponent
                value={name}
                label='Nazwa'
                errorMsg='Niepoprawna nazwa!'
                isError={errorValues.includes('name')}
                setValues={setJobValues}
                fieldName='name'
            />
            <TextFieldComponent
                value={price}
                label='Koszt'
                errorMsg='Niepoprawna cena!'
                isError={errorValues.includes('price')}
                setValues={setJobValues}
                fieldName='price'
            />
            <Button
                variant='contained'
                onClick={onClick}
            >
                Dodaj
            </Button>
        </>
    )
}

export default JobFieldsComponent;