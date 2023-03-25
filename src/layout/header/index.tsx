import styles from '../Layout.module.scss';
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className={styles.header}>
            <h1>Witaj na portalu wlasnej firmy!</h1>
            <Button
                variant="contained"
                onClick={() => navigate('/login', { replace: true})}
            >Zaloguj się</Button>
        </div>
    )
}

export default Header;
