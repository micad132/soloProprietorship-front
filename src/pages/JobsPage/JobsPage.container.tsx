import TableComponentComponent from "../../components/TableComponent.component";
import {JobsTableColumns} from "../../utils/TableColumns";
import AddingComponent from "../../components/AddingComponent";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import {INITIAL_JOB_VALUES, JobRequestType} from "../../types/RequestTypes";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getIsModalOpen, setIsModalOpen} from "../../store/reducers/utilsReducer";

const mockedJobs = [
    {
        id: 1,
        jobName: 'koszenie',
        jobPrice: 2500,
        isJobDone: true,
    },
    {
        id: 2,
        jobName: 'sprzatanie',
        jobPrice: 1320,
        isJobDone: false,
    },
    {
        id: 3,
        jobName: 'podlewanie',
        jobPrice: 768,
        isJobDone: true,
    },

]

const JobsPage = () => {

    const [isAddingOpen, setIsAddingOpen] = useState<boolean>(false);
    const [jobValues, setJobValues] = useState<JobRequestType>(INITIAL_JOB_VALUES);
    const {name, price, isJobDone} = jobValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();

    const onClick = () => {
        setIsAddingOpen(false);
        setJobValues(INITIAL_JOB_VALUES);
    }

    const addingJobContent = (
        <>
            <TextFieldComponent
            value={name}
            label='Nazwa'
            errorMsg={""}
            setValues={setJobValues}
            fieldName='name'
            />
            <TextFieldComponent
            value={price}
            label='Koszt'
            errorMsg={""}
            setValues={setJobValues}
            fieldName='price'
            />
            <Button
            variant='contained'
            onClick={onClick}
        >
            Dodaj
        </Button>
        </> )
    return(
        <div>
            <h1>Usługi oferowane przez przedsiębiorce ({mockedJobs.length})</h1>
            <TableComponentComponent columns={JobsTableColumns} rows={mockedJobs} />
            <AddingComponent text='Dodaj usługę' isOpen={isAddingOpen} setIsOpen={setIsAddingOpen} modalContent={addingJobContent} />
            <ModalComponentComponent isOpen={isModalOpen} children={addingJobContent} onClose={() => dispatch(setIsModalOpen(false))} />
        </div>
    )
}

export default  JobsPage;
