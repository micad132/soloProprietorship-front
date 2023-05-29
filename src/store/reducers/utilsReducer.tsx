import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface UtilsReducerType {
    isModalOpen: boolean,
    token: string,
}

const initialState: UtilsReducerType = {
    isModalOpen: false,
    token: '',
}

export const getIsModalOpen = (state: RootState) => state.utils.isModalOpen;
export const getToken = (state: RootState) => state.utils.token;

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setIsModalOpen(state, action: PayloadAction<boolean>) {
            state.isModalOpen = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    },
    extraReducers(builder) {

    }
})

export const { setIsModalOpen, setToken } = utilsSlice.actions;
export default utilsSlice.reducer;
