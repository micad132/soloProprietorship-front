import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {useState} from "react";
import CustomerFieldsComponent from "../components/CustomerFields.component";
import {CustomerEditRequestType} from "../../../types/RequestTypes";
import {INITIAL_EDIT_CUSTOMER_REQUEST_TYPE} from "../../../types/InitialValues";
import {validateAddUser} from "../../../services/validators";
import {toast} from "react-toastify";

interface Props {
    id: number,
}
const EditCustomerContainer = ({id}: Props) => {
    const [editCustomerValues, setEditCustomerValues] = useState<CustomerEditRequestType>(INITIAL_EDIT_CUSTOMER_REQUEST_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errorValues, setErrorValues] = useState<string[]>([])

    const onClick = () => {
        const result = validateAddUser(editCustomerValues);
        if(result.success) {
            toast.success("Dodano klienta!");
            setEditCustomerValues(INITIAL_EDIT_CUSTOMER_REQUEST_TYPE);
            setIsOpen(false);
        } else {
            const errorArray = result.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Niepoprawne dane!");
        }
    }

    const jobModalEditContent = (
        <CustomerFieldsComponent data={editCustomerValues} setJobValues={setEditCustomerValues} onClick={onClick} errorValues={errorValues} />
    )

    return(
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<EditIcon />}
                    data-testid='tableButton'
                    onClick={() => {
                        setIsOpen(true);
                        console.log('ID', id);
                    }}
                >
                    Edytuj
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={jobModalEditContent} text='Edytuj klienta' />
        </div>
    )
}

export default EditCustomerContainer;