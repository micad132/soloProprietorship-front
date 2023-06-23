import { TextField } from '@mui/material'
import ErrorComponentComponent from './ErrorComponent.component'
import React, { type Dispatch, type ReactElement, type SetStateAction } from 'react'
import { sanitizeData } from '../services/validators'

interface Props {
  value: string | number
  setValues?: Dispatch<SetStateAction<any>>
  isError?: boolean
  label: string
  errorMsg: string
  onInputChange?: any
  fieldName: string
}

const TextFieldComponent = ({ value, setValues, isError, label, errorMsg, onInputChange, fieldName }: Props): ReactElement => {
  const handleInputChange = (e: any): void => {
    const { value } = e.target

    if (setValues) {
      setValues((prevState: any) => ({
        ...prevState,
        [fieldName]: sanitizeData(value)
      }))
    }
    // onInputChange(fieldName,value);
  }

  return (
        <>
            <TextField
                id="outlined-required"
                label={label}
                value={value}
                onChange={(e) => { handleInputChange(e) }}
            />
            {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
        </>
  )
}

export default TextFieldComponent
