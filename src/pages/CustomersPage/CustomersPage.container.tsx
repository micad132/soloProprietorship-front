import TableComponentComponent from "../../components/TableComponent.component";
import {CustomersTableColumns} from "../../utils/TableColumns";
import TextFieldComponent from "../../components/TextField.component";
import MultipleSelect from "../../components/MultipleSelectComponent.component";
import {Button} from "@mui/material";
import {useState} from "react";
import {CustomerAddRequestType, CustomerRequestType} from "../../types/RequestTypes";
import AddingComponent from "../../components/AddingComponent";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setIsModalOpen, getIsModalOpen} from "../../store/reducers/utilsReducer";
import {validateAddUser} from "../../services/validators";
import {toast} from "react-toastify";
import CustomerFieldsComponent from "./components/CustomerFields.component";
import {INITIAL_ADD_CUSTOMER_REQUEST_TYPE} from "../../types/InitialValues";


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


const CustomersPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [customerValues, setCustomerValues] = useState<CustomerAddRequestType>(INITIAL_ADD_CUSTOMER_REQUEST_TYPE);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const {name, surname, address, phoneNumber, email} = customerValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();

    const onClick = () => {
        const result = validateAddUser(customerValues);
        if(result.success) {
            toast.success("Dodano klienta!");
            setCustomerValues(INITIAL_ADD_CUSTOMER_REQUEST_TYPE);
            setIsAddingOpen(false);
        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Niepoprawne dane!");
        }
    }
    const addingContent = (
        <CustomerFieldsComponent data={customerValues} setJobValues={setCustomerValues} onClick={onClick} errorValues={errorValues} />
    )
    return(
        <div>
            <h1>Klienci zalogowanego przedsiębiorcy: ({customersMock.length})</h1>
            <TableComponentComponent  columns={CustomersTableColumns} rows={customersMock}/>
            <AddingComponent text='Dodaj klienta' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingContent} />
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}  children={<h1>TEST CUSTOMER</h1>}/>
        </div>
    )
}

export default CustomersPage;
