import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import React, { type ReactElement, useState } from 'react'
import DeletingComponent from '../components/DeletingComponent.component'
import ModalComponentComponent from '../components/ModalComponent.component'
import { validateCode } from '../services/validators'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../utils/hooks'
import { getQRURL, getUserDetails } from '../store/reducers/utilsReducer'
import ConfirmDeleteComponent from './components/ConfirmDelete.component'
import { deletingProductThunk } from '../store/reducers/productReducer'
import { deletingJobThunk } from '../store/reducers/jobReducer'
import { deletingCustomerThunk } from '../store/reducers/customerReducer'

interface Props {
  id: number
  name: string
  operationName: string
}

const DeletingContainer = ({ id, name, operationName }: Props): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [code, setCode] = useState<string>('')
  const qrURL = useAppSelector(getQRURL)
  const userDetails = useAppSelector(getUserDetails)
  const dispatch = useAppDispatch()

  const onClick = (): void => {
    const result = validateCode(code)
    if (result.success) {
      const dataWithCode = { id, code }
      switch (operationName) {
        case 'job':
          void dispatch(deletingJobThunk(dataWithCode))
          break
        case 'product':
          void dispatch(deletingProductThunk(dataWithCode))
          break
        case 'customer':
          void dispatch(deletingCustomerThunk(dataWithCode))
          break
      }
    } else {
      toast.error('Niepoprawne dane!')
    }
  }

  const deleteWithout2FA = (): void => {
    const data = { id, code }
    switch (operationName) {
      case 'job':
        void dispatch(deletingJobThunk(data))
        break
      case 'product':
        void dispatch(deletingProductThunk(data))
        break
      case 'customer':
        void dispatch(deletingCustomerThunk(data))
        break
    }
  }

  const modalContent = (
    userDetails.using2FA
      ? <DeletingComponent id={id} name={name} onClick={onClick} code={code} setCode={setCode} qrURL={qrURL} isUsing2FA={userDetails.using2FA} />
      : <ConfirmDeleteComponent onClick={deleteWithout2FA} text={name} />
  )
  return (
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<DeleteIcon />}
                    data-testid='tableDeleteProductButton'
                    onClick={() => {
                      setIsModalOpen(true)
                    }}
                >
                    Usuń
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }} children={modalContent}/>
        </div>
  )
}

export default DeletingContainer
