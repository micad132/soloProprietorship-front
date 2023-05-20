import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";

interface UtilsReducerType {
    isModalOpen: boolean,
}

const initialState: UtilsReducerType = {
    isModalOpen: false,
}

export const getIsModalOpen = (state: RootState) => state.utils.isModalOpen;

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setIsModalOpen(state, action: PayloadAction<boolean>) {
            state.isModalOpen = action.payload;
        }
    },
    extraReducers(builder) {

    }
})

export const { setIsModalOpen } = utilsSlice.actions;
export default utilsSlice.reducer;
