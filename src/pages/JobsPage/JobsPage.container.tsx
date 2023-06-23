import React from 'react'
import TableComponentComponent from '../../components/TableComponent.component'
import { JobsTableColumns } from '../../utils/TableColumns'
import AddingComponent from '../../components/AddingComponent'
import { type ReactElement, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { getUserDetails } from '../../store/reducers/utilsReducer'
import { INITIAL_ADD_JOB_REQUEST_VALUES } from '../../types/InitialValues'
import { type JobAddRequestType } from '../../types/RequestTypes'
import { validateAddJob } from '../../services/validators'
import { toast } from 'react-toastify'
import JobFieldsComponent from './components/JobFields.component'
// import JobService from '../../services/api/JobService'
import NotLoggedComponent from '../../components/NotLogged.component'
import { addingJobThunk, getAllJobs } from '../../store/reducers/jobReducer'

const JobsPage = (): ReactElement => {
  const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false)
  const [jobValues, setJobValues] = useState<JobAddRequestType>(INITIAL_ADD_JOB_REQUEST_VALUES)
  const [errorValues, setErrorValues] = useState<string[]>([])
  // const isModalOpen = useAppSelector(getIsModalOpen)
  const userDetails = useAppSelector(getUserDetails)
  const jobs = useAppSelector(getAllJobs)
  const dispatch = useAppDispatch()

  const properJobs = jobs.map(job => ({
    id: job.idJob,
    jobName: job.name,
    jobPrice: job.price
  }))

  const onClick = (): void => {
    console.log('TYP', jobValues.price)
    const validateResult = validateAddJob(jobValues)
    if (validateResult.success) {
      void dispatch(addingJobThunk(jobValues))
      toast.success('Dodano usluge!')
      setIsAddingOpen(false)
      setJobValues(INITIAL_ADD_JOB_REQUEST_VALUES)
    } else {
      const errorArray = validateResult.error.errors.map(error => error.path[0])
      console.log(errorArray)
      setErrorValues(errorArray as string[])
      toast.error('Podano niepoprawne dane!')
    }
    setJobValues(INITIAL_ADD_JOB_REQUEST_VALUES)
  }

  const addingJobContent = (
        <JobFieldsComponent data={jobValues} setJobValues={setJobValues} onClick={onClick} errorValues={errorValues} />
  )

  const properContent = userDetails
    ? (
            <div>
                <h1>Usługi oferowane przez przedsiębiorce ({jobs.length})</h1>
                <TableComponentComponent columns={JobsTableColumns} rows={properJobs} />
                <AddingComponent text='Dodaj usługę' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingJobContent} />
            </div>
      )
    : <NotLoggedComponent />
  return (
        <>
            {properContent}
        </>
  )
}

export default JobsPage
