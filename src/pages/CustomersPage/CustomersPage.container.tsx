import TableComponentComponent from "../../components/TableComponent.component";
import {CustomersTableColumns} from "../../utils/TableColumns";
import TextFieldComponent from "../../components/TextField.component";
import MultipleSelect from "../../components/MultipleSelectComponent.component";
import {Button} from "@mui/material";
import {useState} from "react";
import {CustomerRequestType} from "../../types/RequestTypes";
import AddingComponent from "../../components/AddingComponent";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setIsModalOpen, getIsModalOpen} from "../../store/reducers/utilsReducer";


const customersMock =  [
    { id: 1, lastName: 'Snow', firstName: 'Jon',  email: 'test@test.pl', phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 4, lastName: 'Stark', firstName: 'Arya',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 6, lastName: 'Melisandre', firstName: null, email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
];

const initialState = {
    name: '',
    surName: '',
    address: '',
    phoneNumber: '',
    email: '',
    idUser: 0,
    idTransactions: [],
}

const CustomersPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [customerValues, setCustomerValues] = useState<CustomerRequestType>(initialState);
    const {name, surName, address, phoneNumber, email, idUser, idTransactions} = customerValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();
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
            <h1>Klienci zalogowanego przedsiębiorcy: ({customersMock.length})</h1>
            <TableComponentComponent  columns={CustomersTableColumns} rows={customersMock}/>
            <AddingComponent isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingContent} />
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}  children={<h1>TEST CUSTOMER</h1>}/>
        </div>
    )
}

export default CustomersPage;
