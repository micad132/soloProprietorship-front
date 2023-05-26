import {useState} from "react";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalComponentComponent from "../../../components/ModalComponent.component";
import JobFieldsComponent from "../components/JobFields.component";
import {JobEditRequestType} from "../../../types/RequestTypes";
import {INITIAL_EDIT_JOB_REQUEST_TYPE} from "../../../types/InitialValues";

interface Props {
    id: number,
}
const EditJobContainer = ({id}: Props) => {

    const [jodEditValues, setJobEditValues] = useState<JobEditRequestType>(INITIAL_EDIT_JOB_REQUEST_TYPE);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClick = () => {
        setJobEditValues(INITIAL_EDIT_JOB_REQUEST_TYPE);
        setIsOpen(false);
    }

    const jobModalEditContent = (
        <JobFieldsComponent data={jodEditValues} setJobValues={setJobEditValues} onClick={onClick} />
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
            <ModalComponentComponent isOpen={isOpen} onClose={() => setIsOpen(false)}  children={jobModalEditContent} text='Edytuj' />
        </div>
    )
}

export default EditJobContainer;