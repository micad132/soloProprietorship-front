import Modal from '@mui/material/Modal';
import styles from './Components.module.scss';

interface Props {
    isOpen: boolean,
    onClose: any,
    children: any,
    text?: string,
}

const ModalComponentComponent = ({isOpen, onClose, children, text}: Props) => {

    return(
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

export default  ModalComponentComponent;