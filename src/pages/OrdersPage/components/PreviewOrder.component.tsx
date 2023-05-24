import PreviewJob from "./PreviewJob.component";
import PreviewProduct from "./PreviewProduct.component";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import {getIsModalOpen, setIsModalOpen} from "../../../store/reducers/utilsReducer";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import {Button} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PreviewWrapper from "./PreviewWrapper.component";

interface Props {
    id: number,
}
const PreviewOrderComponent = ({id}: Props) => {

    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();
    const content = (
        <>
            <h4>Pogląd zamówienia</h4>
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
                        dispatch(setIsModalOpen(true));
                        console.log('ID', id);
                    }}
                >
                    Podlgad
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))}  children={content} />
        </div>
    )
}

export default  PreviewOrderComponent;