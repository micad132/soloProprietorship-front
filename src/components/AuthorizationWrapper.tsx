import styles from './Components.module.scss';

interface Props {
    children: JSX.Element[] | JSX.Element,
}

const AuthorizationWrapper = ({children}: Props) => <div className={styles.formWrapper}>{children}</div>

export default AuthorizationWrapper;
