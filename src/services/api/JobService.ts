import axios from 'axios'
import { API_REQUEST_PATH } from '../../utils/GlobalVariables'
import { type JobAddRequestType, type JobEditRequestType } from '../../types/RequestTypes'
import { type JobType } from '../../types/ResponseTypes'

const JOB_URL = `${API_REQUEST_PATH}/job`

const JobService = {

  addJob: async (data: JobAddRequestType) => {
    return await axios({
      method: 'POST',
      url: JOB_URL,
      data,
      headers: {}
    })
  },

  getAllJobs: async (): Promise<JobType[]> => {
    const data = await axios.get(`${JOB_URL}/jobs`)
    return data.data
  },

  editJob: async (editData: JobEditRequestType) => {
    return await axios({
      method: 'PATCH',
      url: `${JOB_URL}`,
      data: editData
    })
  },

  deleteJob: async (jobId: number) => {
    return await axios.delete(`${JOB_URL}/${jobId}`)
  }
}

export default JobService
