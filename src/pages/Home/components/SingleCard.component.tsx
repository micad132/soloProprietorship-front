import styles from '../HomePage.module.scss';
interface Props {
    text: string,
    amount: number,
}

const SingleCard = ({text,amount}: Props) => {
    return(
        <div className={styles.singleCard}>
            <p>{text}</p>
            <p className={styles.amount}>{amount}</p>
        </div>
    )
}

export default SingleCard;