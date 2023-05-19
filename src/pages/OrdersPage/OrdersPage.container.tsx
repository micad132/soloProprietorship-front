import TableComponentComponent from "../../components/TableComponent.component";
import {OrdersTableColumns} from "../../utils/TableColumns";

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

const OrdersPage = () => {

    return(
        <div>
            <h1>Zamówienia przedsiębiorcy:</h1>
            <TableComponentComponent columns={OrdersTableColumns} rows={mockedOrders} />
        </div>
    )
}

export default  OrdersPage;
