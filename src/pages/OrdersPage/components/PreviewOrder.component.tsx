import PreviewJob from "./PreviewJob.component";
import PreviewProduct from "./PreviewProduct.component";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {getIsModalOpen, setIsModalOpen} from "../../../store/reducers/utilsReducer";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import {Button} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PreviewWrapper from "./PreviewWrapper.component";
import {useState} from "react";

interface Props {
    id: number,
}
const PreviewOrderComponent = ({id}: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [test, setTest] = useState('');
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();
    console.log("PREVIEW ORDER");
    const content = (
        <>
            <h4>Pogląd zamówienia nr {id}</h4>
            <PreviewWrapper text='Usługi' >
                <PreviewJob />
                <PreviewJob />
            </PreviewWrapper>
            <PreviewWrapper text='Produkty' >
                <PreviewProduct />
            </PreviewWrapper>

        </>
    )
    return(
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<VisibilityIcon />}
                    data-testid='tableButton'
                    onClick={() => {
                        // dispatch(setIsModalOpen(true));
                        setIsOpen(true);
                        console.log('ID', id);
                    }}
                >
                    Podlgad
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={content} />
        </div>
    )
}

export default  PreviewOrderComponent;