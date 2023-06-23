import React from 'react'
import styles from '../OrdersPage.module.scss'
import { type ReactElement, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const SinglePreviewWrapper = ({ children }: Props): ReactElement => {
  return (
        <div className={styles.jobPreviewWrapper}>
            {children}
        </div>
  )
}

export default SinglePreviewWrapper
