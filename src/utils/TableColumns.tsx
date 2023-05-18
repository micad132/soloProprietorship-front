import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableButton from "../components/TableButton.component";

export const CustomersTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'Imię',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Nazwisko',
        width: 150,
        editable: true,
    },
    {
        field: 'cityName',
        headerName: 'Miasto',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Numer telefonu',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'E-mail',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'editCustomer',
        headerName: 'Edycja',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Edycja' icon={<EditIcon />} /> ,
    },
    {
        field: 'deleteCustomer',
        headerName: 'Usuń',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Usuń' icon={<DeleteIcon />} /> ,
    }
];

export const ProductTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'productName',
        headerName: 'Nazwa produktu',
        width: 150,
        editable: true,
    },
    {
        field: 'productPrice',
        headerName: 'Cena produktu',
        width: 150,
        editable: true,
    },
]