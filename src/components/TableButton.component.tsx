import {Button} from "@mui/material";
import {ReactNode, useState} from "react";
import ModalComponentComponent from "./ModalComponent.component";

interface Props {
    text: string,
    icon: ReactNode,
}

const TableButton = ({text,icon}: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <>
            <strong>
                <Button
                    variant='contained'
                    startIcon={icon}
                    data-testid='tableButton'
                >
                    {text}
                </Button>
            </strong>
            {/*<ModalComponentComponent  isOpen={isOpen} onClose={() => setIsOpen(false)}  children={}/>*/}
        </>
    )
}

export default TableButton;
