import TextFieldComponent from '../../../components/TextField.component'
import SelectComponent from '../../../components/SelectComponent.component'
import MultipleSelect from '../../../components/MultipleSelectComponent.component'
import { Button } from '@mui/material'
import React, { type ReactElement } from 'react'

interface Props {
  values: any
  onClick: () => void
  errorValues: string[]
  setValues: any
  menuItems: any

}

const OrderFieldsComponent = ({ values, onClick, errorValues, setValues, menuItems }: Props): ReactElement => {
  const { price, description, idCustomer, idOfProducts, idOfJobs } = values
  return (
        <>
            <TextFieldComponent
                value={price}
                label='Cena'
                errorMsg='Niepoprawna cena!'
                isError={errorValues.includes('price')}
                fieldName='price'
                setValues={setValues}
            />
            <TextFieldComponent
                value={description}
                label='Opis'
                errorMsg='Niepoprawny opis!'
                isError={errorValues.includes('description')}
                fieldName='description'
                setValues={setValues}
            />
            <SelectComponent
                label='Id klienta'
                menuItems={menuItems.customer}
                setValues={setValues}
                text='Id klienta dodaj'
                value={idCustomer}
                textField='idCustomer'
                errorMsg='ID nie moze byc puste!'
                isError={errorValues.includes('idCustomer')}
            />
            <MultipleSelect
                label='Id produktow'
                menuItems={menuItems.products}
                setValues={setValues}
                textField='idOfProducts'
                value={idOfProducts}
                errorMsg='ID nie moze byc puste!'
                isError={errorValues.includes('idOfProducts')}
            />
            <MultipleSelect
                label='Id uslug'
                menuItems={menuItems.jobs}
                setValues={setValues}
                textField='idOfJobs'
                value={idOfJobs}
                errorMsg='ID nie moze byc puste!'
                isError={errorValues.includes('idOfJobs')}
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

export default OrderFieldsComponent
