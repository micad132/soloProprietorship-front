import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface ErrorReducerType {
    errorMsg: string,
}

const initialState: ErrorReducerType = {
    errorMsg: '',
}

export const getErrorMsg = (state: RootState) => state.error.errorMsg;

const errorSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: {
        setRegisterError(state, action: PayloadAction<string>) {
            state.errorMsg = action.payload;
        }
    },
    extraReducers(builder) {

    }
})

export default errorSlice.reducer;