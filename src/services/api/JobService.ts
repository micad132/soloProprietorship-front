import axios from "axios";
import {API_REQUEST_PATH} from "../../utils/GlobalVariables";
import {JobAddRequestType, JobEditRequestType} from "../../types/RequestTypes";
import {JobType} from "../../types/ResponseTypes";


const JOB_URL = `${API_REQUEST_PATH}/job`;

const JobService = {

    addJob: (data: JobAddRequestType) => {
        return axios({
            method: 'POST',
            url: JOB_URL,
            data,
            headers: {},
        })
    },

    getAllJobs: async (): Promise<JobType[]> => {
       const data = await axios.get(`${JOB_URL}/jobs`);
       return data.data;
    },

    editJob: (editData: JobEditRequestType) => {
        return axios({
            method: 'PATCH',
            url: `${JOB_URL}`,
            data: editData,
        })
    },

    deleteJob: async (jobId: number) => {
        return axios.delete(`${JOB_URL}/${jobId}`)
    }
}

export default  JobService;