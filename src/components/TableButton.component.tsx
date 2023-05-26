import {Button} from "@mui/material";
import {ReactNode, useState} from "react";
import ModalComponentComponent from "./ModalComponent.component";
import {useAppDispatch} from "../utils/hooks";
import {setIsModalOpen} from "../store/reducers/utilsReducer";

interface Props {
    text: string,
    icon: ReactNode,
    id?: number,
}

const TableButton = ({text,icon,id}: Props) => {
    const dispatch = useAppDispatch();
    return(
        <>
            <strong>
                <Button
                    variant='contained'
                    startIcon={icon}
                    data-testid='tableButton'
                    onClick={() => dispatch(setIsModalOpen(true))}
                >
                    {text}
                </Button>
            </strong>
        </>
    )
}

export default TableButton;
