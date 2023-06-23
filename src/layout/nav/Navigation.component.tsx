import SingleLinkComponent from './SingleLink.component'
import styles from '../Layout.module.scss'
import React, { type ReactElement } from 'react'

const NavigationComponent = (): ReactElement => {
  return (
        <nav className={styles.linksWrapper}>
            <SingleLinkComponent path={'/'} text={'Strona główna'} />
            <SingleLinkComponent path='/customers' text='Klienci'/>
            <SingleLinkComponent path='/products' text='Produkty' />
            <SingleLinkComponent path='/jobs' text='Usługi' />
            <SingleLinkComponent path='/orders' text='Zamówienia' />
        </nav>
  )
}

export default NavigationComponent
