import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../index'
import { type DeletingType, type ProductAddRequestType, type ProductEditRequestType } from '../../types/RequestTypes'
import ProductService from '../../services/api/ProductService'
import { type ProductResponseType } from '../../types/ResponseTypes'
import { toast } from 'react-toastify'

interface ProductReducerType {
  errorMsg: string
  isProductsLoaded: boolean
  singleProductRequest: ProductAddRequestType
  products: ProductResponseType[]
  isOpen: boolean
}

const initialState: ProductReducerType = {
  errorMsg: '',
  isProductsLoaded: false,
  singleProductRequest: {
    name: '',
    price: 0,
    weight: 0
  },
  products: [],
  isOpen: false
}

export const addingProductThunk = createAsyncThunk(
  'api/productAdd',
  async (newData: ProductAddRequestType, { rejectWithValue }) => {
    try {
      await ProductService.addNewProduct(newData)
      const data = await ProductService.getAllProducts()
      return { data }
    } catch (reason) {
      return rejectWithValue(reason)
    }
  }
)

export const fetchingAllProductsThunk = createAsyncThunk(
  'product/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await ProductService.getAllProducts()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const deletingProductThunk = createAsyncThunk(
  'product/deleteProduct',
  async (newData: DeletingType, { rejectWithValue }) => {
    try {
      await ProductService.deleteProduct(newData)
      const data = await ProductService.getAllProducts()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const editingProductThunk = createAsyncThunk(
  'product/editProduct',
  async (editData: ProductEditRequestType, { rejectWithValue }) => {
    try {
      await ProductService.editProduct(editData)
      const data = await ProductService.getAllProducts()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const getErrorMsg = (state: RootState): string => state.error.errorMsg
export const getIsProductsLoaded = (state: RootState): boolean => state.product.isProductsLoaded
export const getIsOpen = (state: RootState): boolean => state.product.isOpen
export const getAllProducts = (state: RootState): ProductResponseType[] => state.product.products

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setError (state, action: PayloadAction<string>) {
      state.errorMsg = action.payload
    },
    setIsOpen (state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(addingProductThunk.fulfilled, (state, action) => {
      state.products = action.payload.data
    })
    builder.addCase(fetchingAllProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload.data
    })
    builder.addCase(fetchingAllProductsThunk.pending, (state, action) => {
      state.isProductsLoaded = false
    })
    builder.addCase(editingProductThunk.fulfilled, (state, action) => {
      state.products = action.payload.data
    })
    builder.addCase(deletingProductThunk.fulfilled, (state, action) => {
      toast.success('Pomyslnie usunieto!')
      state.products = action.payload.data
    })
    builder.addCase(deletingProductThunk.rejected, (state, action: any) => {
      toast.error(action.payload.response.data)
    })
  }
})

export const { setIsOpen } = productSlice.actions
export default productSlice.reducer
