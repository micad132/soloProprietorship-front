import styles from './Components.module.scss';
import {ReactNode} from "react";

interface Props {
    children: ReactNode,
}

const AuthorizationWrapperComponent = ({children}: Props) => <div data-testid='authorizationWrapper' className={styles.formWrapper}>{children}</div>

export default AuthorizationWrapperComponent;
