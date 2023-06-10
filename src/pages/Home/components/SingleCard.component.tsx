import styles from '../HomePage.module.scss';
interface Props {
    text: string,
    amount: number,
}

const SingleCard = ({text,amount}: Props) => {
    return(
        <div className={styles.singleCard}>
            <p data-testid='singleCard-text'>{text}</p>
            <p data-testid='singleCard-amount' className={styles.amount}>{amount}</p>
        </div>
    )
}

export default SingleCard;