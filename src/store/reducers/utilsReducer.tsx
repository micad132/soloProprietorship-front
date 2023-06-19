import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {UserDetailsDTO} from "../../types/ResponseTypes";
import {INITIAL_USER_DETAILS_DTO} from "../../types/InitialValues";
import {AuthService} from "../../services/api/AuthService";

interface UtilsReducerType {
    isModalOpen: boolean,
    token: string,
    userDetails: UserDetailsDTO,
    qrURL: string,
}

const initialState: UtilsReducerType = {
    isModalOpen: false,
    token: '',
    userDetails: INITIAL_USER_DETAILS_DTO,
    qrURL: '',
}

export const fetchUserDetails = createAsyncThunk(
    '/api/user',
    async (_, { rejectWithValue}) => {
        try {
            const data = await AuthService.getLoggedUser();
            console.log('DATA', data);
            return data.data;
        } catch (e) {
            console.log(e);
        }
    }
)

export const getIsModalOpen = (state: RootState) => state.utils.isModalOpen;
export const getToken = (state: RootState) => state.utils.token;
export const getUserDetails = (state: RootState) => state.utils.userDetails;
export const getQRURL = (state: RootState) => state.utils.qrURL;

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setIsModalOpen(state, action: PayloadAction<boolean>) {
            state.isModalOpen = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setqrURL(state, action: PayloadAction<string>) {
            state.qrURL = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            console.log('PAYLOAD', action.payload);
            state.userDetails = action.payload;
        })
    }
})

export const { setIsModalOpen, setToken, setqrURL } = utilsSlice.actions;
export default utilsSlice.reducer;
