import {ReactNode} from "react";
import styles from '../HomePage.module.scss';

interface Props {
    children: ReactNode
}
const CardWrapper = ({children}: Props) => {
    return(
    <div className={styles.cardWrapper}>
        <h1>Ilosc elementow na portalu:</h1>
        {children}
    </div>
    )
}

export default CardWrapper;