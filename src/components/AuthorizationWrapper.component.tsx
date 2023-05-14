import styles from './Components.module.scss';

interface Props {
    children: JSX.Element[] | JSX.Element,
}

const AuthorizationWrapperComponent = ({children}: Props) => <div className={styles.formWrapper}>{children}</div>

export default AuthorizationWrapperComponent;
