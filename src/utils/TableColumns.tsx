import {GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PreviewOrderComponent from "../pages/OrdersPage/components/PreviewOrder.component";
import EditProductContainer from "../pages/ProductsPage/containers/EditProduct.container";
import EditJobContainer from "../pages/JobsPage/containers/EditJob.container";
import DeletingContainer from "../containers/DeletingContainer.container";
import EditCustomerContainer from "../pages/CustomersPage/containers/EditCustomer.container";

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
        editable: false,
        renderCell: (params) =>  <EditCustomerContainer  id={params.row.id}/>,
    },
    {
        field: 'deleteCustomer',
        headerName: 'Usuń',
        width: 150,
        editable: false,
        renderCell: (params) =>  <DeletingContainer  id={params.row.id} name={params.row.email}  operationName='customer' /> ,
    }
];

export const ProductTableColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'productName',
        headerName: 'Nazwa',
        width: 150,
        editable: true,
    },
    {
        field: 'productPrice',
        headerName: 'Cena',
        width: 150,
        editable: true,
    },
    {
        field: 'productWeight',
        headerName: 'Waga(kg)',
        width: 150,
        editable: true,
    },
    {
        field: '',
        headerName: 'Edytuj',
        width: 150,
        editable: false,
        renderCell: (params) =>   <EditProductContainer id={params.row.id}  />,
    },
    {
        field: 'deleteProduct',
        headerName: 'Usuń',
        width: 150,
        editable: false,
        renderCell: (params) =>  <DeletingContainer  id={params.row.id} name={params.row.productName} operationName='product' /> ,
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
        field: 'editJob',
        headerName: 'Edycja',
        width: 150,
        editable: false,
        renderCell: (params) =>  <EditJobContainer  id={params.row.id}/> ,
    },
    {
        field: 'deleteJob',
        headerName: 'Usuń',
        width: 150,
        editable: false,
        renderCell: (params) =>  <DeletingContainer  id={params.row.id} name={params.row.jobName}  operationName='job' /> ,
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
        editable: false,
        renderCell: (params) =>  <PreviewOrderComponent id={params.row.id} /> ,
    }

]
