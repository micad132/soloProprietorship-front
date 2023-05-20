import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {ProductRequestType} from "../../types/RequestTypes";
import ProductService from "../../services/api/ProductService";
import {ProductResponseType} from "../../types/ResponseTypes";

interface ProductReducerType {
    errorMsg: string,
    isProductsLoaded: boolean,
    singleProductRequest:ProductRequestType,
    products: ProductResponseType[],
    isOpen: boolean,
}

const initialState: ProductReducerType = {
    errorMsg: '',
    isProductsLoaded: false,
    singleProductRequest: {
        name: '',
        price: 0,
        weight: 0,
    },
    products: [],
    isOpen: false,
}

export const addingCarModelThunk = createAsyncThunk(
    'cars/addCarModel',
    async (newData : ProductRequestType, { rejectWithValue }) => {
        try{
            await ProductService.addNewProduct(newData);

        } catch (reason) {
            throw rejectWithValue(reason);
        }
    }
)

export const fetchingAllProductsThunk = createAsyncThunk(
    'product/fetchAll',
    async (_, { rejectWithValue}) => {
        try {
            const data = await ProductService.getAllProducts();
            return data.data;
        } catch (e) {
            rejectWithValue(e);
        }
    }
)

export const getErrorMsg = (state: RootState) => state.error.errorMsg;
export const getIsProductsLoaded = (state: RootState) => state.product.isProductsLoaded;
export const getIsOpen = (state: RootState) => state.product.isOpen;



const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setError(state, action: PayloadAction<string>) {
            state.errorMsg = action.payload;
        },
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        }
    },
    extraReducers(builder) {

    }
})

export const { setIsOpen } = productSlice.actions;
export default productSlice.reducer;
