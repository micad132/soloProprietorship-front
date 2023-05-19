import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
    {
        field: 'editProduct',
        headerName: 'Edytuj',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Edycja' icon={<EditIcon />} /> ,
    },
    {
        field: 'deleteProduct',
        headerName: 'Usuń',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Edycja' icon={<DeleteIcon />} /> ,
    },


]

export const JobsTableColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
    },
    {
        field: 'jobName',
        headerName: 'Nazwa',
        width: 150,
        editable: true,
    },
    {
        field: 'jobPrice',
        headerName: 'Koszt',
        width: 150,
        editable: true,
    },
    {
        field: 'isJobDone',
        headerName: 'Wykonana',
        width: 150,
        editable: true,
    },
    {
        field: 'editJob',
        headerName: 'Edycja',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Edycja' icon={<EditIcon />} /> ,
    },
    {
        field: 'deleteJob',
        headerName: 'Usuń',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Usuń' icon={<DeleteIcon />} /> ,
    }

]

export const OrdersTableColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
    },
    {
        field: 'orderDate',
        headerName: 'Data złożenia',
        width: 150,
        editable: true,
    },
    {
        field: 'productNames',
        headerName: 'Produkty',
        width: 150,
        editable: true,
    },
    {
        field: 'jobsNames',
        headerName: 'Usługi',
        width: 150,
        editable: true,
    },
    {
        field: 'orderPreview',
        headerName: 'Podgląd',
        width: 150,
        editable: true,
        renderCell: (params) =>  <TableButton text='Podgląd' icon={<VisibilityIcon />} /> ,
    }

]
