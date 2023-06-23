import React, { type Dispatch, type ReactElement, type ReactNode, type SetStateAction } from 'react'
import { Button } from '@mui/material'
import ModalComponentComponent from './ModalComponent.component'

interface Props {
  text: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<any>>
  modalContent: ReactNode
}

const AddingComponent = ({ text, isOpen, setIsOpen, modalContent }: Props): ReactElement => {
  return (
        <div>
            <p style={{ margin: '5px 0px', fontWeight: 'bold' }}>{text}</p>
            <Button
                variant='contained'
                onClick={() => { setIsOpen(true) }}
                data-testid='addingComponentButton'
            >
                Dodaj
            </Button>
            <ModalComponentComponent children={modalContent} isOpen={isOpen} onClose={() => { setIsOpen(false) }} text={text} />
        </div>
  )
}

export default AddingComponent
