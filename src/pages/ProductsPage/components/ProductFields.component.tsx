import React from 'react'
import TextFieldComponent from '../../../components/TextField.component'
import { Button } from '@mui/material'
import { type ProductAddRequestType } from '../../../types/RequestTypes'
import { type ReactElement } from 'react'

interface Props {
  data: ProductAddRequestType
  setProductValues: any
  onClick: any
  errorValues: string[]
  id?: number
}

const ProductFieldsComponent = ({ data, setProductValues, onClick, errorValues, id }: Props): ReactElement => {
  const { name, price, weight } = data
  return (
        <>
                <TextFieldComponent
                    value={name}
                    label='Nazwa produktu'
                    isError={errorValues.includes('name')}
                    errorMsg={'Niepoprawna nazwa'}
                    setValues={setProductValues}
                    fieldName='name'
                />
                <TextFieldComponent
                    value={price}
                    label='Cena produktu'
                    isError={errorValues.includes('price')}
                    errorMsg={'Niepoprawna cena'}
                    setValues={setProductValues}
                    fieldName='price'
                />
                <TextFieldComponent
                    value={weight}
                    label='Waga produktu'
                    isError={errorValues.includes('weight')}
                    errorMsg={'Niepoprawna waga'}
                    setValues={setProductValues}
                    fieldName='weight'
                />
                <Button
                    variant='contained'
                    onClick={onClick}
                >
                    Dodaj
                </Button>
        </>
  )
}

export default ProductFieldsComponent
