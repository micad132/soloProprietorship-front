import {useState} from "react";
import {Button} from "@mui/material";
import ModalComponentComponent from "../../components/ModalComponent.component";
import TextFieldComponent from "../../components/TextField.component";
import {ProductRequestType} from "../../types/RequestTypes";


const initialState = {
    name: '',
    price: 0,
}
const AddingProductComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [productValues, setProductValues] = useState<ProductRequestType>(initialState);
    const {name, price} = productValues;
    const productModalContent = (
        <>
            <h3>Dodaj produkt</h3>
            <TextFieldComponent value={name} label='Nazwa produktu'   errorMsg={""}/>
            <TextFieldComponent value={price} label='Cena produktu' errorMsg={""}  />
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
            <ModalComponentComponent children={productModalContent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default AddingProductComponent;