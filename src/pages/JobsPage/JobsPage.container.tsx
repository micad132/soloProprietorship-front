import TableComponentComponent from "../../components/TableComponent.component";
import {JobsTableColumns} from "../../utils/TableColumns";

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

    return(
        <div>
            <h1>Usługi oferowane przez przedsiębiorce ({mockedJobs.length})</h1>
            <TableComponentComponent columns={JobsTableColumns} rows={mockedJobs} />
        </div>
    )
}

export default  JobsPage;
