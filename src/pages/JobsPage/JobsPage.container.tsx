import TableComponentComponent from "../../components/TableComponent.component";
import {JobsTableColumns} from "../../utils/TableColumns";
import AddingComponent from "../../components/AddingComponent";
import {useState} from "react";
import TextFieldComponent from "../../components/TextField.component";
import {Button} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ModalComponentComponent from "../../components/ModalComponent.component";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {getIsModalOpen, setIsModalOpen} from "../../store/reducers/utilsReducer";
import {INITIAL_ADD_JOB_REQUEST_VALUES} from "../../types/InitialValues";
import {JobAddRequestType} from "../../types/RequestTypes";

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
    const [jobValues, setJobValues] = useState<JobAddRequestType>(INITIAL_ADD_JOB_REQUEST_VALUES);
    const {name, price} = jobValues;
    const isModalOpen = useAppSelector(getIsModalOpen);
    const dispatch = useAppDispatch();

    const onClick = () => {
        setIsAddingOpen(false);
        setJobValues(INITIAL_ADD_JOB_REQUEST_VALUES);
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
        </div>
    )
}

export default  JobsPage;
