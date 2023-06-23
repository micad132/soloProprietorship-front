import styles from './Components.module.scss'
import React, { type ReactElement, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthorizationWrapperComponent = ({ children }: Props): ReactElement => <div data-testid='authorizationWrapper' className={styles.formWrapper}>{children}</div>

export default AuthorizationWrapperComponent
