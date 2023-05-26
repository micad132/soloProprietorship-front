import TextFieldComponent from "../../../components/TextField.component";
import {Button} from "@mui/material";
import {JobAddRequestType} from "../../../types/RequestTypes";

interface Props {
    data: JobAddRequestType,
    setJobValues: any,
    onClick: () => void,
}
const JobFieldsComponent = ({data, setJobValues, onClick}: Props) => {

    const {name, price} = data;
    return(
        <>
            <TextFieldComponent
                value={name}
                label='Nazwa'
                errorMsg={""}
                setValues={setJobValues}
                fieldName='name'
            />
            <TextFieldComponent
                value={price}
                label='Koszt'
                errorMsg={""}
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