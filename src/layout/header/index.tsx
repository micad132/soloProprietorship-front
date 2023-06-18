import styles from '../Layout.module.scss';
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import NavigationComponent from "../nav/Navigation.component";
import HomeIcon from '@mui/icons-material/Home';
import {useAppSelector} from "../../utils/hooks";
import {getUserDetails} from "../../store/reducers/utilsReducer";
import LoggedUserData from "./components/LoggedUserData";

const Header = () => {
    const navigate = useNavigate();
    const isLogged = useAppSelector(getUserDetails);
    console.log(isLogged);

    const properButton = isLogged
        ? (
            <form method='post' action='http://localhost:8080/logout'>
                <Button
                    variant="contained"
                    type='submit'
                >
                    Wyloguj się
                </Button>
            </form>
        )
        : (
        <Button
            variant="contained"
            onClick={() => navigate('/login', { replace: true})}
        >
            Zaloguj się
        </Button>
        );



    return(
        <div className={styles.header}>
            <h1 data-testid='header'>Witaj na portalu wlasnej firmy!</h1>
            <LoggedUserData />
            {properButton}
            <NavigationComponent />
        </div>
    )
}

export default Header;
