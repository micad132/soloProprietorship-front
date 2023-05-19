import {Dispatch, ReactNode, SetStateAction} from "react";
import {Button} from "@mui/material";
import ModalComponentComponent from "./ModalComponent.component";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<any>>;
    modalContent: ReactNode
}


const AddingComponent = ({isOpen, setIsOpen, modalContent}: Props) => {

    return(
        <div>
            <Button
                variant='contained'
                onClick={() => setIsOpen(true)}
            >
                Dodaj
            </Button>
            <ModalComponentComponent children={modalContent} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}

export default AddingComponent;
