import Select, { type SelectChangeEvent } from '@mui/material/Select'
import React, { type Dispatch, type ReactElement, type SetStateAction } from 'react'
import { FormControl, InputLabel, MenuItem, OutlinedInput } from '@mui/material'
import ErrorComponentComponent from './ErrorComponent.component'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

interface Props {
  label: string
  menuItems: any
  setValues: Dispatch<SetStateAction<any>>
  value: string[]
  textField: string
  isError: boolean
  errorMsg: string
}

const MultipleSelect = ({ label, menuItems, setValues, textField, value, isError, errorMsg }: Props): ReactElement => {
  const handleChange = (event: SelectChangeEvent<any>): void => {
    const { target: { value } } = event
    setValues((prevState: any) => ({
      ...prevState,
      [textField]: typeof value === 'string' ? value.split(',') : value
    }))
  }
  const menuItemsProper = menuItems.map((item: any) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)
  return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    MenuProps={MenuProps}
                >
                    {menuItemsProper}
                </Select>
                {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
            </FormControl>
        </div>
  )
}

export default MultipleSelect
