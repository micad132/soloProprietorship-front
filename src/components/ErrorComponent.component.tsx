import styles from './Components.module.scss'
import React, { type ReactElement } from 'react'

interface Props {
  errorMsg: string
}
const ErrorComponentComponent = ({ errorMsg }: Props): ReactElement => {
  return (
        <div className={styles.errorWrapper}>
            <p data-testid='errorMsg'>{errorMsg}</p>
        </div>
  )
}

export default ErrorComponentComponent
