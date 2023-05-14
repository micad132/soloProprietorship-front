import TableComponentComponent from "../../components/TableComponent.component";
import AddingProductComponent from "./AddingProduct.component";
import {ProductTableColumns} from "../../utils/TableColumns";

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

const ProductsPage = () => {

    return(
        <div>
            <h1>Produkty które oferuje zalogowany przedsiębiorca</h1>
            <TableComponentComponent  columns={ProductTableColumns} rows={productsMock}/>
            <AddingProductComponent />
        </div>
    )
}

export default  ProductsPage;