import React, { type ReactElement, type ReactNode } from 'react'
import styles from '../OrdersPage.module.scss'

interface Props {
  text: string
  children: ReactNode
}

const PreviewWrapper = ({ text, children }: Props): ReactElement => {
  return (
        <div className={styles.previewWrapper}>
            <p className={styles.header}>{text}</p>
            {children}
        </div>
  )
}

export default PreviewWrapper
