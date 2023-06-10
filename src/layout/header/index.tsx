import styles from '../Layout.module.scss';
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import NavigationComponent from "../nav/Navigation.component";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const navigate = useNavigate();
    const isLogged = true;

    const properButton = isLogged
        ? (
            <Button
                variant="contained"
                onClick={() => navigate('/login', { replace: true})}
            >
                Zaloguj się
            </Button>
        )
        : (
            <Button
                variant="contained"
                onClick={() => navigate('/logout', { replace: true})}
            >
                Wyloguj się
            </Button>
        );

    return(
        <div className={styles.header}>
            <h1 data-testid='header'>Witaj na portalu wlasnej firmy!</h1>
            {properButton}
            <NavigationComponent />
        </div>
    )
}

export default Header;
