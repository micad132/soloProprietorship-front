import SinglePreviewWrapper from "./SinglePreviewWrapper.component";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../OrdersPage.module.scss";

const PreviewProduct = () => {

    return(
        <SinglePreviewWrapper>
            <div>
                <p>ID: 1</p>
                <p>Nazwa: marchewka</p>
                <p>Cena: 1733</p>
                <p>Waga: 120kg</p>
            </div>
            <div>
                <DeleteIcon className={styles.icon} onClick={() => console.log('TEST')}/>
            </div>
        </SinglePreviewWrapper>
    )
}

export default  PreviewProduct;