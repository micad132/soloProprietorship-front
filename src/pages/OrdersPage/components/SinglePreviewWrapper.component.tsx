import styles from '../OrdersPage.module.scss';
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}
const SinglePreviewWrapper = ({children}: Props) => {

    return(
        <div className={styles.jobPreviewWrapper}>
            {children}
        </div>
    )
}

export default  SinglePreviewWrapper;