import Modal from '@mui/material/Modal'
import styles from './Components.module.scss'
import { type ReactElement } from 'react'
import React from 'react'

interface Props {
  isOpen: boolean
  onClose: any
  children: any
  text?: string
}

const ModalComponentComponent = ({ isOpen, onClose, children, text }: Props): ReactElement => {
  return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            data-testid='modal'
        >
            <div className={styles.modalContent}>
                <h4>{text}</h4>
                {children}
            </div>
        </Modal>
  )
}

export default ModalComponentComponent
