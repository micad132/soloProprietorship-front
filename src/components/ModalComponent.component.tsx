import Modal from '@mui/material/Modal';
import styles from './Components.module.scss';

interface Props {
    isOpen: boolean,
    onClose: any,
    children: any,
}

const ModalComponentComponent = ({isOpen, onClose, children}: Props) => {

    return(
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.modalContent}>
                {children}
            </div>
        </Modal>
    )
}

export default  ModalComponentComponent;