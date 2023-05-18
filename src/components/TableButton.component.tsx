import {Button} from "@mui/material";
import {ReactNode} from "react";

interface Props {
    text: string,
    icon: ReactNode,
}

const TableButton = ({text,icon}: Props) => {

    return(
        <>
            <strong>
                <Button
                    variant='contained'
                    startIcon={icon}
                >
                    {text}
                </Button>
            </strong>
        </>
    )
}

export default TableButton;