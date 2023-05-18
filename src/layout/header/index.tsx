import styles from '../Layout.module.scss';
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import NavigationComponent from "../nav/Navigation.component";
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className={styles.header}>
            <h1>Witaj na portalu wlasnej firmy!</h1>
            <Button
                    variant="contained"
                    onClick={() => navigate('/login', { replace: true})}
                >
                Zaloguj się
            </Button>
            <NavigationComponent />
        </div>
    )
}

export default Header;
