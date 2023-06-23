import React, { type ReactElement, useState } from 'react'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ModalComponentComponent from '../../../components/ModalComponent.component'
import JobFieldsComponent from '../components/JobFields.component'
import { type JobAddRequestType } from '../../../types/RequestTypes'
import { INITIAL_FULL_JOB_TYPE } from '../../../types/InitialValues'
import { validateAddJob } from '../../../services/validators'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../../utils/hooks'
import { editingJobThunk } from '../../../store/reducers/jobReducer'

interface Props {
  idd: number
}
const EditJobContainer = ({ idd }: Props): ReactElement => {
  const [jodEditValues, setJobEditValues] = useState<JobAddRequestType>(INITIAL_FULL_JOB_TYPE)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [errorValues, setErrorValues] = useState<string[]>([])
  const dispatch = useAppDispatch()

  const onClick = (): void => {
    const res = validateAddJob(jodEditValues)
    const idJob = idd
    if (res.success) {
      void dispatch(editingJobThunk({ ...jodEditValues, idJob }))
      toast.success('Pomyślnie edytowano usluge!')
      setJobEditValues(INITIAL_FULL_JOB_TYPE)
      setIsOpen(false)
    } else {
      const errorArray = res.error.errors.map(error => error.path[0])
      setErrorValues(errorArray as string[])
      toast.error('Niepoprawne dane!')
    }
  }

  const jobModalEditContent = (
        <JobFieldsComponent data={jodEditValues} setJobValues={setJobEditValues} onClick={onClick} errorValues={errorValues} />
  )

  return (
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<EditIcon />}
                    data-testid='tableButton'
                    onClick={() => { setIsOpen(true) }}
                >
                    Edytuj
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => { setIsOpen(false) }} children={jobModalEditContent} text='Edytuj usluge' />
        </div>
  )
}

export default EditJobContainer
