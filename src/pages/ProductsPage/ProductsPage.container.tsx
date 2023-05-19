import TableComponentComponent from "../../components/TableComponent.component";
import AddingComponent from "../../components/AddingComponent";
import {ProductTableColumns} from "../../utils/TableColumns";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductRequestType} from "../../types/RequestTypes";

const productsMock = [
    {
        id: 1,
        productName: 'marchewka',
        productPrice: 235,
    },
    {
        id: 2,
        productName: 'pomidorek',
        productPrice: 1238,
    },
    {
        id: 3,
        productName: 'kawunia',
        productPrice: 123,
    }
]

const initialState = {
    name: '',
    price: 0,
    weight: 0,
}

const ProductsPage = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [productValues, setProductValues] = useState<ProductRequestType>(initialState);
    const {name, price, weight} = productValues;

    const onClick = () => {
        setProductValues(initialState);
        setIsOpen(false);
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
            <AddingComponent  isOpen={isOpen} setIsOpen={setIsOpen}  modalContent={productModalContent} />
        </div>
    )
}

export default  ProductsPage;
