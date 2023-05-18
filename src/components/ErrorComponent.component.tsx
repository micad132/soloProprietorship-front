import styles from './Components.module.scss';

interface Props {
    errorMsg: string,
}
const ErrorComponentComponent = ({errorMsg}: Props) => {

    return(
        <div className={styles.errorWrapper}>
            <p data-testid='errorMsg'>{errorMsg}</p>
        </div>
    )
}

export default ErrorComponentComponent;