
import {CustomerType, JobType, ProductResponseType} from "../../types/ResponseTypes";
import {INITIAL_FULL_JOB_TYPE, INITIAL_FULL_PRODUCT_TYPE} from "../../types/InitialValues";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductService from "../../services/api/ProductService";
import {RootState} from "../index";
import JobService from "../../services/api/JobService";
import CustomerService from "../../services/api/CustomerService";
import {CustomerAddRequestType, CustomerEditRequestType} from "../../types/RequestTypes";

interface CustomerReducerType  {
    isLoaded: boolean,
    customers: CustomerType[]
}

const initialState: CustomerReducerType = {
    isLoaded: false,
    customers: [],
}

export const fetchAllCustomersThunk = createAsyncThunk(
    'api/customer',
    async (_, { rejectWithValue}) => {

        try {
            const data =  await CustomerService.getAllCustomers();
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }

    }
)

export const addingCustomerThunk = createAsyncThunk(
    'api/customerAdd',
    async (newData: CustomerAddRequestType, { rejectWithValue}) => {
        try {
            await CustomerService.addCustomer(newData);
            const data = await CustomerService.getAllCustomers();
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const editingCustomerThunk = createAsyncThunk(
    'api/editCustomer',
    async (newData: CustomerEditRequestType, { rejectWithValue}) => {
        try {
            await CustomerService.editCustomer(newData);
            const data = await CustomerService.getAllCustomers();
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)


export const getAllCustomers = (state: RootState) => state.customer.customers;


const customerSlice = createSlice({
    name: 'customerSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllCustomersThunk.fulfilled, (state, action) => {
            state.customers = action.payload.data;
        })
        builder.addCase(addingCustomerThunk.fulfilled, (state, action) => {
            state.customers = action.payload.data;
        })
        builder.addCase(editingCustomerThunk.fulfilled, (state, action) => {
            state.customers = action.payload.data;
        })

    },

})

export default customerSlice.reducer;