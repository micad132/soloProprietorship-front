import TableComponentComponent from '../../components/TableComponent.component'
import { CustomersTableColumns } from '../../utils/TableColumns'
import React, { type ReactElement, useState } from 'react'
import { type CustomerAddRequestType } from '../../types/RequestTypes'
import AddingComponent from '../../components/AddingComponent'
import ModalComponentComponent from '../../components/ModalComponent.component'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { setIsModalOpen, getIsModalOpen, getUserDetails } from '../../store/reducers/utilsReducer'
import { validateAddUser } from '../../services/validators'
import { toast } from 'react-toastify'
import CustomerFieldsComponent from './components/CustomerFields.component'
import { INITIAL_ADD_CUSTOMER_REQUEST_TYPE } from '../../types/InitialValues'
import { addingCustomerThunk, getAllCustomers } from '../../store/reducers/customerReducer'
import NotLoggedComponent from '../../components/NotLogged.component'

const CustomersPage = (): ReactElement => {
  const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false)
  const [customerValues, setCustomerValues] = useState<CustomerAddRequestType>(INITIAL_ADD_CUSTOMER_REQUEST_TYPE)
  const [errorValues, setErrorValues] = useState<string[]>([])
  const isModalOpen = useAppSelector(getIsModalOpen)
  const dispatch = useAppDispatch()
  const customers = useAppSelector(getAllCustomers)
  const userDetails = useAppSelector(getUserDetails)
  console.log('CUSTOMERS', customers)

  const properCustomers = customers.map(customer => ({
    id: customer.idCustomer,
    firstName: customer.name,
    lastName: customer.surName,
    cityName: customer.address,
    phoneNumber: customer.phoneNumber,
    email: customer.email
  }))

  const onClick = (): void => {
    const result = validateAddUser(customerValues)
    if (result.success) {
      void dispatch(addingCustomerThunk(customerValues))
      toast.success('Dodano klienta!')
      setCustomerValues(INITIAL_ADD_CUSTOMER_REQUEST_TYPE)
      setIsAddingOpen(false)
    } else {
      const errorArray = result.error.errors.map(error => error.path[0])
      console.log('ABC', errorArray)
      setErrorValues(errorArray as string[])
      toast.error('Niepoprawne dane!')
    }
  }
  const addingContent = (
        <CustomerFieldsComponent data={customerValues} setJobValues={setCustomerValues} onClick={onClick} errorValues={errorValues} buttonText='Dodaj' />
  )
  console.log(properCustomers)

  const properContent = userDetails
    ? (
            <div>
                <h1>Klienci zalogowanego przedsiębiorcy: ({customers.length})</h1>
                <TableComponentComponent columns={CustomersTableColumns} rows={properCustomers} />
                <AddingComponent text='Dodaj klienta' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingContent} />
                <ModalComponentComponent isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))} children={<h1>TEST CUSTOMER</h1>}/>
            </div>
      )
    : <NotLoggedComponent />
  return (
        <>
            {properContent}
        </>
  )
}

export default CustomersPage
