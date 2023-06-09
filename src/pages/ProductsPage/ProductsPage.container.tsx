import React from 'react'
import TableComponentComponent from '../../components/TableComponent.component'
import AddingComponent from '../../components/AddingComponent'
import { ProductTableColumns } from '../../utils/TableColumns'
import { type ReactElement, useState } from 'react'
import { type ProductAddRequestType } from '../../types/RequestTypes'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { getUserDetails } from '../../store/reducers/utilsReducer'
import { INITIAL_ADD_PRODUCT_REQUEST_TYPE } from '../../types/InitialValues'
import ProductFieldsComponent from './components/ProductFields.component'
import { validateAddProduct } from '../../services/validators'
import { toast } from 'react-toastify'
import { addingProductThunk, getAllProducts } from '../../store/reducers/productReducer'
import NotLoggedComponent from '../../components/NotLogged.component'
import PageContentWrapperComponent from '../../components/PageContentWrapper.component'

const ProductsPage = (): ReactElement => {
  const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false)
  const [productValues, setProductValues] = useState<ProductAddRequestType>(INITIAL_ADD_PRODUCT_REQUEST_TYPE)
  const [errorValues, setErrorValues] = useState<string[]>([])

  const dispatch = useAppDispatch()
  const userDetails = useAppSelector(getUserDetails)
  const products = useAppSelector(getAllProducts)

  const properProducts = products.map(product => ({
    id: product.idProduct,
    productName: product.name,
    productPrice: product.price,
    productWeight: product.weight
  }))

  const onClickAdd = (): void => {
    const results = validateAddProduct(productValues)
    if (results.success) {
      void dispatch(addingProductThunk(productValues))
      toast.success('Dodano produkt!')
      setProductValues(INITIAL_ADD_PRODUCT_REQUEST_TYPE)
      setErrorValues([])
      setIsAddingOpen(false)
    } else {
      const errorArray = results.error.errors.map(error => error.path[0])
      setErrorValues(errorArray as string[])
      toast.error('Niepoprawne dane!')
    }
  }

  const productModalAddContent = (
        <ProductFieldsComponent data={productValues} setProductValues={setProductValues} onClick={onClickAdd} errorValues={errorValues} />
  )

  const properContent =
        userDetails
          ? (
                <>
                    <h1>Produkty które oferuje zalogowany przedsiębiorca ({products.length})</h1>
                    <TableComponentComponent columns={ProductTableColumns} rows={properProducts}/>
                    <AddingComponent text='Dodaj produkt' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={productModalAddContent}/>
                </>
            )
          : <NotLoggedComponent />

  return (
        <PageContentWrapperComponent>
          {properContent}
        </PageContentWrapperComponent>
  )
}

export default ProductsPage
