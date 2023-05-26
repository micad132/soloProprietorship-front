import TableComponentComponent from "../../components/TableComponent.component";
import AddingComponent from "../../components/AddingComponent";
import {ProductTableColumns} from "../../utils/TableColumns";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductAddRequestType, ProductEditRequestType} from "../../types/RequestTypes";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setIsModalOpen, getIsModalOpen} from "../../store/reducers/utilsReducer";
import {INITIAL_ADD_PRODUCT_REQUEST_TYPE, INITIAL_EDIT_PRODUCT_REQUEST_TYPE} from "../../types/InitialValues";
import ProductFieldsComponent from "./components/ProductFields.component";

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

const ProductsPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [productValues, setProductValues] = useState<ProductAddRequestType>(INITIAL_ADD_PRODUCT_REQUEST_TYPE);

    const {name, price, weight} = productValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        console.log("DANE ADD PRODUCT", productValues);
        setProductValues(INITIAL_ADD_PRODUCT_REQUEST_TYPE);
        setIsAddingOpen(false);
    }



    const productModalAddContent = (
        <ProductFieldsComponent data={productValues} setProductValues={setProductValues} onClick={onClickAdd}  />
    )

    return(
        <div>
            <h1>Produkty które oferuje zalogowany przedsiębiorca</h1>
            <TableComponentComponent  columns={ProductTableColumns} rows={productsMock}/>
            <AddingComponent  text='Dodaj produkt' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen}  modalContent={productModalAddContent}/>
        </div>
    )
}

export default  ProductsPage;
