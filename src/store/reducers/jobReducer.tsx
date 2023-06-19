import {JobType, ProductResponseType} from "../../types/ResponseTypes";
import {INITIAL_FULL_JOB_TYPE, INITIAL_FULL_PRODUCT_TYPE} from "../../types/InitialValues";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductService from "../../services/api/ProductService";
import {RootState} from "../index";
import JobService from "../../services/api/JobService";
import {JobAddRequestType, JobEditRequestType} from "../../types/RequestTypes";

interface JobReducerType  {
    isLoaded: boolean,
    jobs: JobType[]
}

const initialState: JobReducerType = {
    isLoaded: false,
    jobs: [],
}

export const fetchAllJobsThunk = createAsyncThunk(
    'api/job',
    async (_, { rejectWithValue}) => {

        try {
            const data =  await JobService.getAllJobs();
            console.log(data);
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }

    }
)

export const addingJobThunk = createAsyncThunk(
    'api/addJob',
    async (newData: JobAddRequestType, { rejectWithValue}) => {
        try {
            await JobService.addJob(newData);
            const data = await JobService.getAllJobs();
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

export const editingJobThunk = createAsyncThunk(
    'api/editJob',
    async (newData: JobEditRequestType, { rejectWithValue}) => {
        try {
            console.log('DATA EDIT JOB', newData);
            await JobService.editJob(newData);
            const data = await JobService.getAllJobs();
            return { data };
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)


export const getAllJobs = (state: RootState) => state.job.jobs;


const jobSlice = createSlice({
    name: 'jobSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllJobsThunk.fulfilled, (state, action) => {
            state.jobs = action.payload.data;
        })
        builder.addCase(addingJobThunk.fulfilled, (state, action) => {
            state.jobs = action.payload.data;
        })
        builder.addCase(editingJobThunk.fulfilled, (state, action) => {
            state.jobs = action.payload.data;
        })

    },

})

export default jobSlice.reducer;