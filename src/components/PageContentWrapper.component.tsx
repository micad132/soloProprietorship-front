import React, { type ReactElement, type ReactNode } from 'react'
import styles from './Components.module.scss'

interface Props {
  children: ReactNode
}

const PageContentWrapper = ({ children }: Props): ReactElement => {
  return (
        <div className={styles.pageContentWrapper}>
            {children}
        </div>
  )
}

export default PageContentWrapper
