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

interface Props {
    id: number,
}
const EditProductContainer = ({id}: Props) => {

    const [editProductValue, setEditProductValues] = useState<ProductEditRequestType>(INITIAL_EDIT_PRODUCT_REQUEST_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {name, price, weight} = editProductValue;
    console.log(isOpen);

    const onClickEdit = () => {
        const data = {...editProductValue, id};
        console.log("DANE EDIT PRODUCT", data);
        setEditProductValues(INITIAL_EDIT_PRODUCT_REQUEST_TYPE);
    }

    // const test = (
    //     <>
    //         <TextFieldComponent
    //             value={name}
    //             label='Nazwa produktu'
    //             errorMsg={""}
    //             setValues={setEditProductValues}
    //             fieldName='name'
    //         />
    //         <TextFieldComponent
    //             value={price}
    //             label='Cena produktu'
    //             errorMsg={""}
    //             setValues={setEditProductValues}
    //             fieldName='price'
    //         />
    //         <TextFieldComponent
    //             value={weight}
    //             label='Waga produktu'
    //             errorMsg={""}
    //             setValues={setEditProductValues}
    //             fieldName='weight'
    //         />
    //         <Button
    //             variant='contained'
    //             onClick={onClickEdit}
    //         >
    //             Dodaj
    //         </Button>
    //     </>
    // )

    const productModalEditContent = (
        <ProductFieldsComponent  data={editProductValue} setProductValues={setEditProductValues} onClick={onClickEdit} />
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