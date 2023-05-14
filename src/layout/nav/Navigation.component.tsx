import SingleLinkComponent from "./SingleLink.component";
import styles from '../Layout.module.scss';

const NavigationComponent = () => {

    return(
        <nav className={styles.linksWrapper}>
            <SingleLinkComponent path='/customers' text='Klienci'/>
            <SingleLinkComponent path='/products' text='Produkty' />
            <SingleLinkComponent path='/jobs' text='Usługi' />
            <SingleLinkComponent path='/orders' text='Zamówienia' />
        </nav>
    )
}

export default  NavigationComponent;