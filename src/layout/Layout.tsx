import Header from './header/index'
import Footer from './footer'
import styles from './Layout.module.scss'
import React, { type ReactElement } from 'react'

interface Props {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props): ReactElement => {
  return (
        <div className={styles.appWrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
  )
}

export default Layout
