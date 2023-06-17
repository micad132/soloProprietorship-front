import {Button} from "@mui/material";
import {getIsModalOpen, setIsModalOpen} from "../../../store/reducers/utilsReducer";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import ProductFieldsComponent from "../components/ProductFields.component";
import {useState} from "react";
import {ProductEditRequestType} from "../../../types/RequestTypes";
import {INITIAL_FULL_PRODUCT_TYPE} from "../../../types/InitialValues";
import EditIcon from "@mui/icons-material/Edit";
import TextFieldComponent from "../../../components/TextField.component";
import {validateAddProduct} from "../../../services/validators";
import {toast} from "react-toastify";
import ProductService from "../../../services/api/ProductService";
import {editingProductThunk} from "../../../store/reducers/productReducer";

interface Props {
    id: number,
}
const EditProductContainer = ({id}: Props) => {

    const [editProductValue, setEditProductValues] = useState<ProductEditRequestType>(INITIAL_FULL_PRODUCT_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    const onClickEdit = () => {
        console.log("DANE ADD PRODUCT", editProductValue);
        const results = validateAddProduct(editProductValue);
        if( results.success) {
            // @ts-ignore
            const data = {id, ...editProductValue};
            dispatch(editingProductThunk(data));
            toast.success("Edytowano produkt!");
            console.log("DANE EDIT PRODUCT", data);
            setEditProductValues(INITIAL_FULL_PRODUCT_TYPE);
            setErrorValues([]);
            setIsOpen(false);
        } else {
            const errorArray = results.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Niepoprawne dane!");
        }

    }

    const productModalEditContent = (
        <ProductFieldsComponent  id={id} data={editProductValue} setProductValues={setEditProductValues} onClick={onClickEdit}  errorValues={errorValues}/>
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
                    }}
                >
                    Edytuj
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={productModalEditContent} text='Edytuj produkt' />
        </div>
    )
}

export default  EditProductContainer;