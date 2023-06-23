import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import styles from './Components.module.scss'
import React, { type ReactElement } from 'react'

interface Props {
  columns: GridColDef[]
  rows: any
}

const TableComponentComponent = ({ columns, rows }: Props): ReactElement => {
  return (
        <div className={styles.tableWrapper}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5
                    }
                  }
                }}
                checkboxSelection
                disableRowSelectionOnClick
                autoPageSize={true}
                autoHeight={true}
            />
        </div>
  )
}

export default TableComponentComponent
