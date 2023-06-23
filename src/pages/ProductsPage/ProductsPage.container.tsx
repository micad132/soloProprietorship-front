import TableComponentComponent from "../../components/TableComponent.component";
import AddingComponent from "../../components/AddingComponent";
import {ProductTableColumns} from "../../utils/TableColumns";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductAddRequestType, ProductEditRequestType} from "../../types/RequestTypes";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {setIsModalOpen, getIsModalOpen, getToken, getUserDetails} from "../../store/reducers/utilsReducer";
import {INITIAL_ADD_PRODUCT_REQUEST_TYPE, INITIAL_FULL_PRODUCT_TYPE} from "../../types/InitialValues";
import ProductFieldsComponent from "./components/ProductFields.component";
import {validateAddProduct} from "../../services/validators";
import {toast} from "react-toastify";
import {addingProductThunk, fetchingAllProductsThunk, getAllProducts} from "../../store/reducers/productReducer";
import ProductService from "../../services/api/ProductService";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NotLoggedComponent from "../../components/NotLogged.component";

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
    const [errorValues, setErrorValues] = useState<string[]>([]);

    const {name, price, weight} = productValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    // const products = useAppSelector(getAllProducts);
    const dispatch = useAppDispatch();
    const token = useAppSelector(getToken);
    const userDetails = useAppSelector(getUserDetails);
    const products = useAppSelector(getAllProducts);

    const properProducts = products.map(product => ({
        id: product.idProduct,
        productName: product.name,
        productPrice: product.price,
        productWeight: product.weight,
    }))
    console.log('PRODUKTY', products);
    const navigate = useNavigate();


    const onClickAdd = () => {
        console.log("DANE ADD PRODUCT", productValues);
        const results = validateAddProduct(productValues);
        if(results.success) {
            dispatch(addingProductThunk(productValues));
            toast.success("Dodano produkt!");
            setProductValues(INITIAL_ADD_PRODUCT_REQUEST_TYPE);
            setErrorValues([]);
            setIsAddingOpen(false);
        } else {
            const errorArray = results.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
            toast.error("Niepoprawne dane!");
        }


    }

    const productModalAddContent = (
        <ProductFieldsComponent data={productValues} setProductValues={setProductValues} onClick={onClickAdd} errorValues={errorValues}  />
    )

    const properContent =
        userDetails
            ? (
                <div>
                    <h1>Produkty które oferuje zalogowany przedsiębiorca</h1>
                    <TableComponentComponent  columns={ProductTableColumns} rows={properProducts}/>
                    <AddingComponent  text='Dodaj produkt' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen}  modalContent={productModalAddContent}/>
                </div>
            )
            : <NotLoggedComponent />;


    return(
        <>
            <div>
                <h1>Produkty które oferuje zalogowany przedsiębiorca</h1>
                <TableComponentComponent  columns={ProductTableColumns} rows={properProducts}/>
                <AddingComponent  text='Dodaj produkt' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen}  modalContent={productModalAddContent}/>
            </div>
        </>
    )
}

export default  ProductsPage;
