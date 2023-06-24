import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../index'
import { type UserDetailsDTO } from '../../types/ResponseTypes'
import { INITIAL_USER_DETAILS_DTO, INITIAL_USER_WITHOUT_CODE_VALUES } from '../../types/InitialValues'
import { AuthService } from '../../services/api/AuthService'
import { type LoginWithoutCodeType } from '../../types/Authorization'

interface UtilsReducerType {
  isModalOpen: boolean
  token: string
  userDetails: UserDetailsDTO
  qrURL: string
  userData: LoginWithoutCodeType
}

const initialState: UtilsReducerType = {
  isModalOpen: false,
  token: '',
  userDetails: INITIAL_USER_DETAILS_DTO,
  qrURL: '',
  userData: INITIAL_USER_WITHOUT_CODE_VALUES
}

export const fetchUserDetails = createAsyncThunk(
  '/api/user',
  async (_, { rejectWithValue }) => {
    try {
      const data = await AuthService.getLoggedUser()
      return data.data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getIsModalOpen = (state: RootState): boolean => state.utils.isModalOpen
export const getToken = (state: RootState): string => state.utils.token
export const getUserDetails = (state: RootState): UserDetailsDTO => state.utils.userDetails
export const getQRURL = (state: RootState): string => state.utils.qrURL
export const getUserData = (state: RootState): LoginWithoutCodeType => state.utils.userData

const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setIsModalOpen (state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload
    },
    setToken (state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    setqrURL (state, action: PayloadAction<string>) {
      state.qrURL = action.payload
    },
    setUserData (state, action: PayloadAction<LoginWithoutCodeType>) {
      state.userData = action.payload
    }
  },
  extraReducers (builder) {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.userDetails = action.payload
    })
  }
})

export const { setIsModalOpen, setToken, setqrURL, setUserData } = utilsSlice.actions
export default utilsSlice.reducer
