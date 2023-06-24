import React from 'react'
import { Button } from '@mui/material'
import ModalComponentComponent from '../../../components/ModalComponent.component'
import { useAppDispatch } from '../../../utils/hooks'
import ProductFieldsComponent from '../components/ProductFields.component'
import { type ReactElement, useState } from 'react'
import { type ProductAddRequestType } from '../../../types/RequestTypes'
import { INITIAL_FULL_PRODUCT_TYPE } from '../../../types/InitialValues'
import EditIcon from '@mui/icons-material/Edit'
import { validateAddProduct } from '../../../services/validators'
import { toast } from 'react-toastify'
import { editingProductThunk } from '../../../store/reducers/productReducer'

interface Props {
  id: number
}
const EditProductContainer = ({ id }: Props): ReactElement => {
  const [editProductValue, setEditProductValues] = useState<ProductAddRequestType>(INITIAL_FULL_PRODUCT_TYPE)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [errorValues, setErrorValues] = useState<string[]>([])
  const dispatch = useAppDispatch()

  const onClickEdit = (): void => {
    const results = validateAddProduct(editProductValue)
    if (results.success) {
      const data = { ...editProductValue, idProduct: id }
      void dispatch(editingProductThunk(data))
      toast.success('Edytowano produkt!')
      setEditProductValues(INITIAL_FULL_PRODUCT_TYPE)
      setErrorValues([])
      setIsOpen(false)
    } else {
      const errorArray = results.error.errors.map(error => error.path[0])
      setErrorValues(errorArray as string[])
      toast.error('Niepoprawne dane!')
    }
  }

  const productModalEditContent = (
        <ProductFieldsComponent id={id} data={editProductValue} setProductValues={setEditProductValues} onClick={onClickEdit} errorValues={errorValues}/>
  )

  return (
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<EditIcon />}
                    data-testid='tableButton'
                    onClick={() => { setIsOpen(true) }}
                >
                    Edytuj
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => { setIsOpen(false) }} children={productModalEditContent} text='Edytuj produkt' />
        </div>
  )
}

export default EditProductContainer
