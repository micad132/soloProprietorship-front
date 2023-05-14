import AddingCustomerComponent from "./AddingCustomer.component";
import TableComponentComponent from "../../components/TableComponent.component";
import {CustomersTableColumns} from "../../utils/TableColumns";


const customersMock =  [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const CustomersPage = () => {
    return(
        <div>
            <h1>Klienci zalogowanego przedsiębiorcy:</h1>
            <AddingCustomerComponent />
            <TableComponentComponent  columns={CustomersTableColumns} rows={customersMock}/>
        </div>
    )
}

export default CustomersPage;