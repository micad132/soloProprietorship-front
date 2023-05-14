import {Button} from "@mui/material";
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useState} from "react";

const AddingCustomerComponent = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const addingContent = (
        <div>
            <p>Modal text</p>
        </div>
    )
    return(
        <div>
            <Button
                variant='contained'
                onClick={() => setIsModalOpen(true)}
            >
                Dodaj
            </Button>
            <ModalComponentComponent children={addingContent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

export default  AddingCustomerComponent;