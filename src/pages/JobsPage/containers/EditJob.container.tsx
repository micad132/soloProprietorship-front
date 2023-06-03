import {useState} from "react";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import JobFieldsComponent from "../components/JobFields.component";
import {JobEditRequestType} from "../../../types/RequestTypes";
import {INITIAL_EDIT_JOB_REQUEST_TYPE} from "../../../types/InitialValues";
import {validateAddJob} from "../../../services/validators";
import {toast} from "react-toastify";

interface Props {
    id: number,
}
const EditJobContainer = ({id}: Props) => {

    const [jodEditValues, setJobEditValues] = useState<JobEditRequestType>(INITIAL_EDIT_JOB_REQUEST_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [errorValues, setErrorValues] = useState<string[]>([]);

    const onClick = () => {
        const res = validateAddJob(jodEditValues);
        if(res.success) {
            toast.success('Pomyślnie edytowano usluge!');
            setJobEditValues(INITIAL_EDIT_JOB_REQUEST_TYPE);
            setIsOpen(false);
        } else {
            const errorArray = res.error.errors.map(error => error.path[0]);
            setErrorValues(errorArray as string[]);
            toast.error('Niepoprawne dane!');

        }

    }

    const jobModalEditContent = (
        <JobFieldsComponent data={jodEditValues} setJobValues={setJobEditValues} onClick={onClick} errorValues={errorValues} />
    )

    return(
        <div>
            <strong>
                <Button
                    variant='contained'
                    startIcon={<EditIcon />}
                    data-testid='tableButton'
                    onClick={() => {
                        setIsOpen(true);
                        console.log('ID', id);
                    }}
                >
                    Edytuj
                </Button>
            </strong>
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={jobModalEditContent} text='Edytuj usluge' />
        </div>
    )
}

export default EditJobContainer;