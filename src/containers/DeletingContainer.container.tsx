import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";
import DeletingComponent from "../components/DeletingComponent.component";
import ModalComponentComponent from "../components/ModalComponent.component";

interface Props {
    id: number,
    name: string,
}

const DeletingContainer = ({id, name}: Props) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const modalContent = (
        <DeletingComponent  id={id} name={name}  onClick={() => console.log('jol')}/>
    )
    return(
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<DeleteIcon />}
                    data-testid='tableDeleteProductButton'
                    onClick={() => {
                        setIsModalOpen(true);
                        console.log('ID', id);
                    }}
                >
                    Usuń
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} children={modalContent}/>
        </div>
    )
}

export default DeletingContainer;