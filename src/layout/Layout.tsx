import Header from './header/index';
import Footer from "./footer";
import styles from './Layout.module.scss';

interface Props {
    children: JSX.Element[] | JSX.Element,
}

const Layout = ({children}: Props) => {

    return(
        <div className={styles.appWrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
