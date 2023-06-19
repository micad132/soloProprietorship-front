import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './Components.module.scss';
import {CustomersTableColumns} from "../utils/TableColumns";


interface Props {
    columns: GridColDef[],
    rows: any,
}

const TableComponentComponent = ({columns, rows}: Props) => {

    return(
        <div className={styles.tableWrapper}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                checkboxSelection
                disableRowSelectionOnClick
                autoPageSize={true}
                autoHeight={true}
            />
        </div>
    )
}

export default  TableComponentComponent;