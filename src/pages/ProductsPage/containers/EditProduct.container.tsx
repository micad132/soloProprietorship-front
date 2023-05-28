import {Button} from "@mui/material";
import {getIsModalOpen, setIsModalOpen} from "../../../store/reducers/utilsReducer";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import ProductFieldsComponent from "../components/ProductFields.component";
import {useState} from "react";
import {ProductEditRequestType} from "../../../types/RequestTypes";
import {INITIAL_EDIT_PRODUCT_REQUEST_TYPE} from "../../../types/InitialValues";
import EditIcon from "@mui/icons-material/Edit";
import TextFieldComponent from "../../../components/TextField.component";
import {validateAddProduct} from "../../../services/validators";
import {toast} from "react-toastify";

interface Props {
    id: number,
}
const EditProductContainer = ({id}: Props) => {

    const [editProductValue, setEditProductValues] = useState<ProductEditRequestType>(INITIAL_EDIT_PRODUCT_REQUEST_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const {name, price, weight} = editProductValue;
    console.log(isOpen);

    const onClickEdit = () => {
        console.log("DANE ADD PRODUCT", editProductValue);
        const results = validateAddProduct(editProductValue);
        if( results.success) {
            toast.success("Edytowano produkt!");
            const data = {...editProductValue, id};
            console.log("DANE EDIT PRODUCT", data);
            setEditProductValues(INITIAL_EDIT_PRODUCT_REQUEST_TYPE);
        } else {
            const errorArray = results.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Niepoprawne dane!");
        }

    }

    const productModalEditContent = (
        <ProductFieldsComponent  data={editProductValue} setProductValues={setEditProductValues} onClick={onClickEdit}  errorValues={errorValues}/>
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
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={productModalEditContent} text='Edytuj' />
        </div>
    )
}

export default  EditProductContainer;