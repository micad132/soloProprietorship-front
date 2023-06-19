import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";
import DeletingComponent from "../components/DeletingComponent.component";
import ModalComponentComponent from "../components/ModalComponent.component";
import {validateCode} from "../services/validators";
import {toast} from "react-toastify";
import {useAppSelector} from "../utils/hooks";
import {getQRURL} from "../store/reducers/utilsReducer";

interface Props {
    id: number,
    name: string,
    operationName: string,
}

const DeletingContainer = ({id, name, operationName}: Props) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');
    const qrURL = useAppSelector(getQRURL);

    const onClick = () => {

        const result = validateCode(code);
        console.log(result);
        if(result.success) {
            switch(operationName) {
                case 'job':
                    console.log('JOB', id);
                    break;
                case 'product':
                    console.log('product');
                    break;
                case 'customer':
                    console.log('customer');
                    break;
            }
        }
        else {
            toast.error('Niepoprawne dane!');
        }
    }

    const modalContent = (
        <DeletingComponent  id={id} name={name}  onClick={onClick} code={code} setCode={setCode}  qrURL={qrURL} />
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