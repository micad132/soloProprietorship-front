import {Button} from "@mui/material";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {useState} from "react";
import TextFieldComponent from "../../../components/TextField.component";
import {CustomerRequestType} from "../../../types/RequestTypes";
import MultipleSelect from "../../../components/MultipleSelectComponent.component";

const initialState = {
    name: '',
    surName: '',
    address: '',
    phoneNumber: '',
    email: '',
    idUser: 0,
    idTransactions: [],
}

const AddingCustomerComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [customerValues, setCustomerValues] = useState<CustomerRequestType>(initialState);
    const {name, surName, address, phoneNumber, email, idUser, idTransactions} = customerValues;
    const addingContent = (
        <>
            <h3>Dodaj klienta</h3>
            <TextFieldComponent
                value={name}
                label='Imie'
                errorMsg={""}
                setValues={setCustomerValues}
                fieldName={'name'}/>
            <TextFieldComponent
                value={surName}
                label='Nazwisko'
                errorMsg={""}
                setValues={setCustomerValues}
                fieldName={"surName"}/>
            <TextFieldComponent
                value={address}
                label='Adres'
                errorMsg={""}
                setValues={setCustomerValues}
                fieldName={'address'}
            />
            <TextFieldComponent
                value={phoneNumber}
                label='Numer telefonu'
                errorMsg={""}
                setValues={setCustomerValues}
                fieldName={"phoneNumber"}
            />
            <TextFieldComponent
                value={email}
                label='Email'
                errorMsg={""}
                setValues={setCustomerValues}
                fieldName={'email'}
            />
            <MultipleSelect />
            <Button
                variant='contained'
            >
                Dodaj
            </Button>
        </>
    )
    return(
        <div>
            <Button
                variant='contained'
                onClick={() => setIsModalOpen(true)}
            >
                Dodaj
            </Button>
            <ModalComponentComponent children={addingContent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default  AddingCustomerComponent;