import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {ProductAddRequestType} from "../../types/RequestTypes";
import ProductService from "../../services/api/ProductService";
import {ProductResponseType} from "../../types/ResponseTypes";

interface ProductReducerType {
    errorMsg: string,
    isProductsLoaded: boolean,
    singleProductRequest:ProductAddRequestType,
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

export const addingProductThunk = createAsyncThunk(
    'api/productAdd',
    async (newData : ProductAddRequestType, { rejectWithValue }) => {
        try{
            await ProductService.addNewProduct(newData);
            const data = await ProductService.getAllProducts();
            return { data };

        } catch (reason) {
            throw rejectWithValue(reason);
        }
    }
)

export const fetchingAllProductsThunk = createAsyncThunk(
    'product/fetchAll',
    async (token: string, { rejectWithValue}) => {
        try {
            console.log('EJJ');
            const data = await ProductService.getAllProducts(token);
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const deletingPartThunk = createAsyncThunk(
    'product/deleteProduct',
    async (data, { rejectWithValue}) => {
        try {

        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const getErrorMsg = (state: RootState) => state.error.errorMsg;
export const getIsProductsLoaded = (state: RootState) => state.product.isProductsLoaded;
export const getIsOpen = (state: RootState) => state.product.isOpen;
export const getAllProducts = (state: RootState) => state.product.products;



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
        builder.addCase(addingProductThunk.fulfilled, (state, action) => {
            state.products = action.payload.data;
            state.isProductsLoaded = true;
        })
        builder.addCase(fetchingAllProductsThunk.fulfilled, (state, action) => {
            state.products = action.payload.data;
            state.isProductsLoaded = true;
        })
        builder.addCase(fetchingAllProductsThunk.pending, (state, action) => {
            state.isProductsLoaded = false;
        })
    }
})

export const { setIsOpen } = productSlice.actions;
export default productSlice.reducer;
