import { type TransactionType } from '../../types/ResponseTypes'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TransactionService from '../../services/api/TransactionService'
import { type RootState } from '../index'
import { type TransactionAddRequestType } from '../../types/RequestTypes'

interface TransactionReducerType {
  isLoading: boolean
  transactions: TransactionType[]
}

const initialState: TransactionReducerType = {
  isLoading: false,
  transactions: []
}

export const fetchingTransactionsThunk = createAsyncThunk(
  '/api/transaction',
  async (_, { rejectWithValue }) => {
    try {
      const data = await TransactionService.getAllTransactions()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const addingTransactionThunk = createAsyncThunk(
  'api/addTransaction',
  async (newData: TransactionAddRequestType, { rejectWithValue }) => {
    try {
      await TransactionService.addTransaction(newData)
      const data = await TransactionService.getAllTransactions()
      return { data }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const getAllTransactions = (state: RootState): TransactionType[] => state.transaction.transactions

const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchingTransactionsThunk.fulfilled, (state, action) => {
      state.transactions = action.payload.data
    })
    builder.addCase(addingTransactionThunk.fulfilled, (state, action) => {
      state.transactions = action.payload.data
    })
  }
})

export default transactionSlice.reducer
