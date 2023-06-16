import TextFieldComponent from "../../../components/TextField.component";
import {Button} from "@mui/material";
import { CustomerAddRequestType } from "../../../types/RequestTypes";

interface Props {
    data: CustomerAddRequestType,
    setJobValues: any,
    onClick: () => void,
    errorValues: string[],
}

const CustomerFieldsComponent = ({data, setJobValues, onClick, errorValues}: Props) => {

    const {name,surName,address,phoneNumber,email} = data;
    return(
        <>
            <TextFieldComponent
                value={name}
                label='Imie'
                errorMsg='Niepoprawne imie!'
                isError={errorValues.includes('name')}
                setValues={setJobValues}
                fieldName={'name'}/>
            <TextFieldComponent
                value={surName}
                label='Nazwisko'
                errorMsg='Niepoprawne nazwisko!'
                isError={errorValues.includes('surName')}
                setValues={setJobValues}
                fieldName={"surName"}/>
            <TextFieldComponent
                value={address}
                label='Miasto'
                errorMsg='Niepoprawne miasto!'
                isError={errorValues.includes('address')}
                setValues={setJobValues}
                fieldName={'address'}
            />
            <TextFieldComponent
                value={phoneNumber}
                label='Numer telefonu'
                errorMsg='Niepoprawny numer telefonu!'
                isError={errorValues.includes('phoneNumber')}
                setValues={setJobValues}
                fieldName={"phoneNumber"}
            />
            <TextFieldComponent
                value={email}
                label='Email'
                errorMsg='Niepoprawny email!'
                isError={errorValues.includes('email')}
                setValues={setJobValues}
                fieldName={'email'}
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

export default CustomerFieldsComponent;