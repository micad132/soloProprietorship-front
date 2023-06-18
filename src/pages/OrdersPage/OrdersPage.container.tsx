import TableComponentComponent from "../../components/TableComponent.component";
import {OrdersTableColumns} from "../../utils/TableColumns";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getIsModalOpen, getUserDetails, setIsModalOpen} from "../../store/reducers/utilsReducer";
import PreviewJob from "./components/PreviewJob.component";
import PreviewProduct from "./components/PreviewProduct.component";
import AddingComponent from "../../components/AddingComponent";
import {useState} from "react";
import OrderFieldsComponent from "./components/OrderFields.component";
import {TransactionAddRequestType} from "../../types/RequestTypes";
import {INITIAL_ADD_TRANSACTION_REQUEST_TYPE} from "../../types/InitialValues";
import {validateAddOrder} from "../../services/validators";
import {toast} from "react-toastify";
import NotLoggedComponent from "../../components/NotLogged.component";
import {addingTransactionThunk, getAllTransactions} from "../../store/reducers/transactionReducer";
import {getAllJobs} from "../../store/reducers/jobReducer";
import {getAllProducts} from "../../store/reducers/productReducer";
import {getAllCustomers} from "../../store/reducers/customerReducer";

const mockedOrders = [
    {
        id: 1,
        orderDate: '15.03.2023',
        productNames: 'Mleko, Owoce',
        jobsNames: 'Sprzatanie, Koszenie',
    },
    {
        id: 2,
        orderDate: '19.05.2023',
        productNames: 'Piwo',
        jobsNames: 'Sprzatanie',
    },

]

const mockedJobsIds = ['1','2','3'];
const mockedProductsIds = ['5','6','7'];
const mockedCustomerIds = ['7','8','9'];

const OrdersPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [errorValues, setErrorValues] = useState<string[]>([]);
    const [addingOrderValues, setAddingOrderValues] = useState<TransactionAddRequestType>(INITIAL_ADD_TRANSACTION_REQUEST_TYPE);

    const dispatch = useAppDispatch();
    const userDetails = useAppSelector(getUserDetails);
    const orders = useAppSelector(getAllTransactions);
    const jobs = useAppSelector(getAllJobs);
    const products = useAppSelector(getAllProducts);
    const customers = useAppSelector(getAllCustomers);

    const properOrders = orders.map(order => ({
        id: order.idTransaction,
        orderDate: order.date,
        productNames: order.products.map(order => order.name),
        jobsNames: order.jobs.map(job => job.name),

    }))

    const jobsNames = jobs.map(job => ({
        id: job.idJob,
        name: job.name,
    }))

    const productsNames = products.map(product => ({
        id: product.idProduct,
        name: product.name,
    }))

    const customersNames = customers.map(customer => ({
        id: customer.idCustomer,
        surName: customer.surName,
    }))

    const onClick = () => {

        const result = validateAddOrder(addingOrderValues);
        console.log(result);
        if(result.success) {

            dispatch(addingTransactionThunk(addingOrderValues));
            toast.success('Dodano');
            setAddingOrderValues(INITIAL_ADD_TRANSACTION_REQUEST_TYPE);
            setErrorValues([]);
            setIsAddingOpen(false);
        } else {
            toast.error('Niepoprawne dane!');
            const errorArray = result.error.errors.map(error => error.path[0]);
            console.log('ABC', errorArray);
            setErrorValues(errorArray as string[]);
        }
    }

    const menuItems = {
        products: productsNames,
        jobs: jobsNames,
        customer: customersNames,
    }
    const addingContent = (
        <OrderFieldsComponent
            errorValues={errorValues}
            onClick={onClick}
            values={addingOrderValues}
            setValues={setAddingOrderValues}
            menuItems={menuItems}
        />
    )

    const properContent = userDetails
        ? (
            <div>
                <h1>Zamówienia przedsiębiorcy:</h1>
                <TableComponentComponent columns={OrdersTableColumns} rows={properOrders} />
                <AddingComponent text='Dodaj zamówienie' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingContent} />
            </div>
        )
        : <NotLoggedComponent />
    return(
        <>
            {properContent}
        </>
    )
}

export default  OrdersPage;
