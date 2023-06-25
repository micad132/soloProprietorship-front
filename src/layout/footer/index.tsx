import styles from '../Layout.module.scss'
import React, { type ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
        <footer className={styles.footer} data-testid='footerWrapper'>
            <h4 data-testid='footer'>Projekt wykonany przez Michala, Daniela, Karola</h4>
        </footer>
  )
}

export default Footer
