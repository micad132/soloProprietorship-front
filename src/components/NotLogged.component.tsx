import styles from './Components.module.scss';
const NotLoggedComponent = () => {

    return(
        <div className={styles.notLoggedWrapper}>
            <h1>Nie jesteś zalogowany!</h1>
            <h2>Zaloguj się aby w pełni korzystać z portalu!</h2>
        </div>
    )
}

export default NotLoggedComponent;