import AddingCustomerComponent from "./components/AddingCustomer.component";
import TableComponentComponent from "../../components/TableComponent.component";
import {CustomersTableColumns} from "../../utils/TableColumns";


const customersMock =  [
    { id: 1, lastName: 'Snow', firstName: 'Jon',  email: 'test@test.pl', phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 4, lastName: 'Stark', firstName: 'Arya',  email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 6, lastName: 'Melisandre', firstName: null, email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'test@test.pl',  phoneNumber: '123456789', cityName: 'Kielce' },
];

const CustomersPage = () => {
    return(
        <div>
            <h1>Klienci zalogowanego przedsiębiorcy: ({customersMock.length})</h1>
            <AddingCustomerComponent />
            <TableComponentComponent  columns={CustomersTableColumns} rows={customersMock}/>
        </div>
    )
}

export default CustomersPage;