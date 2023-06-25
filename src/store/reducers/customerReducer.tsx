
import { type CustomerType } from '../../types/ResponseTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../index'
import CustomerService from '../../services/api/CustomerService'
import { type CustomerAddRequestType, type CustomerEditRequestType, type DeletingType } from '../../types/RequestTypes'
import { toast } from 'react-toastify'

interface CustomerReducerType {
  isLoaded: boolean
  customers: CustomerType[]
}

const initialState: CustomerReducerType = {
  isLoaded: false,
  customers: []
}

export const fetchAllCustomersThunk = createAsyncThunk(
  'api/customer',
  async (_, { rejectWithValue }) => {
    try {
      const data = await CustomerService.getAllCustomers()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const addingCustomerThunk = createAsyncThunk(
  'api/customerAdd',
  async (newData: CustomerAddRequestType, { rejectWithValue }) => {
    try {
      await CustomerService.addCustomer(newData)
      const data = await CustomerService.getAllCustomers()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const editingCustomerThunk = createAsyncThunk(
  'api/editCustomer',
  async (newData: CustomerEditRequestType, { rejectWithValue }) => {
    try {
      await CustomerService.editCustomer(newData)
      const data = await CustomerService.getAllCustomers()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const deletingCustomerThunk = createAsyncThunk(
  'api/deleteCustomer',
  async (newData: DeletingType, { rejectWithValue }) => {
    try {
      await CustomerService.deleteCustomer(newData)
      const data = await CustomerService.getAllCustomers()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const getAllCustomers = (state: RootState): CustomerType[] => state.customer.customers

const customerSlice = createSlice({
  name: 'customerSlice',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchAllCustomersThunk.fulfilled, (state, action) => {
      state.customers = action.payload.data
    })
    builder.addCase(addingCustomerThunk.fulfilled, (state, action) => {
      state.customers = action.payload.data
    })
    builder.addCase(editingCustomerThunk.fulfilled, (state, action) => {
      state.customers = action.payload.data
    })
    builder.addCase(deletingCustomerThunk.fulfilled, (state, action) => {
      state.customers = action.payload.data
    })
    builder.addCase(deletingCustomerThunk.rejected, (state, action: any) => {
      toast.error(action.payload.response.data)
    })
  }

})

export default customerSlice.reducer
