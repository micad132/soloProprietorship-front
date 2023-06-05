import TableComponentComponent from "../../components/TableComponent.component";
import {OrdersTableColumns} from "../../utils/TableColumns";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getIsModalOpen, setIsModalOpen} from "../../store/reducers/utilsReducer";
import PreviewJob from "./components/PreviewJob.component";
import PreviewProduct from "./components/PreviewProduct.component";
import AddingComponent from "../../components/AddingComponent";
import {useState} from "react";
import OrderFieldsComponent from "./components/OrderFields.component";
import {TransactionAddRequestType} from "../../types/RequestTypes";
import {INITIAL_ADD_TRANSACTION_REQUEST_TYPE} from "../../types/InitialValues";

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

    const onClick = () => {
        console.log('abc', addingOrderValues);
    }

    const menuItems = {
        productsIds: mockedProductsIds,
        jobsIds: mockedJobsIds,
        customerIds: mockedCustomerIds,
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
    return(
        <div>
            <h1>Zamówienia przedsiębiorcy:</h1>
            <TableComponentComponent columns={OrdersTableColumns} rows={mockedOrders} />
            <AddingComponent text='Dodaj klienta' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingContent} />
        </div>
    )
}

export default  OrdersPage;
