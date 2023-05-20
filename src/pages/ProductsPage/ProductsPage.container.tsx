import TableComponentComponent from "../../components/TableComponent.component";
import AddingComponent from "../../components/AddingComponent";
import {ProductTableColumns} from "../../utils/TableColumns";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductRequestType} from "../../types/RequestTypes";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setIsModalOpen, getIsModalOpen} from "../../store/reducers/utilsReducer";

const productsMock = [
    {
        id: 1,
        productName: 'marchewka',
        productPrice: 235,
        productWeight: 50,
    },
    {
        id: 2,
        productName: 'pomidorek',
        productPrice: 1238,
        productWeight: 70,
    },
    {
        id: 3,
        productName: 'kawunia',
        productPrice: 123,
        productWeight: 20
    }
]

const initialState = {
    name: '',
    price: 0,
    weight: 0,
}

const ProductsPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [productValues, setProductValues] = useState<ProductRequestType>(initialState);
    const {name, price, weight} = productValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();

    const onClick = () => {
        setProductValues(initialState);
        setIsAddingOpen(false);
    }

    const productModalContent = (
        <>
            <h3>Dodaj produkt</h3>
            <TextFieldComponent
                value={name}
                label='Nazwa produktu'
                errorMsg={""}
                setValues={setProductValues}
                fieldName='name'
            />
            <TextFieldComponent
                value={price}
                label='Cena produktu'
                errorMsg={""}
                setValues={setProductValues}
                fieldName='price'
            />
            <TextFieldComponent
                value={weight}
                label='Waga produktu'
                errorMsg={""}
                setValues={setProductValues}
                fieldName='weight'
            />
            <Button
                variant='contained'
                onClick={onClick}
            >
                Dodaj
            </Button>
        </>
    )
    return(
        <div>
            <h1>Produkty które oferuje zalogowany przedsiębiorca</h1>
            <TableComponentComponent  columns={ProductTableColumns} rows={productsMock}/>
            <AddingComponent  isOpen={isAddingOpen} setIsOpen={setIsAddingOpen}  modalContent={productModalContent} />
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}  children={<h1>TEST PRODUCT</h1>}/>
        </div>
    )
}

export default  ProductsPage;
