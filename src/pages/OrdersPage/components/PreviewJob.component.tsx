import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from '../OrdersPage.module.scss';
import SinglePreviewWrapper from "./SinglePreviewWrapper.component";

const PreviewJob = () => {

    return(
        <SinglePreviewWrapper>
            <div>
                <p>ID: 1</p>
                <p>Nazwa: koszenie</p>
                <p>Koszt: 2500</p>
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </div>
        </SinglePreviewWrapper>
    )
}

export default  PreviewJob;