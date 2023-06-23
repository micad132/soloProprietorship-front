import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import React, { type Dispatch, type ReactElement, type SetStateAction } from 'react'
import ErrorComponentComponent from './ErrorComponent.component'

interface Props {
  text: string
  value: string
  label: string
  setValues: Dispatch<SetStateAction<any>>
  menuItems: any
  textField: string
  isError: boolean
  errorMsg: string
}

const SelectComponent = ({ text, value, label, setValues, menuItems, textField, isError, errorMsg }: Props): ReactElement => {
  const handleChange = (event: SelectChangeEvent): void => {
    setValues((prevState: any) => ({
      ...prevState,
      [textField]: event.target.value
    }))
  }

  const menuItemsProper = menuItems.map((item: any) => <MenuItem key={item.id} value={item.id}>{item.surName}</MenuItem>)

  return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{text}</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {menuItemsProper}
                </Select>
                {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
            </FormControl>
        </Box>
  )
}

export default SelectComponent
