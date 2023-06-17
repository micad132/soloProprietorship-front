import HomeComponent from "./components/HomeComponent.component";
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchUserDetails, getUserDetails} from "../../store/reducers/utilsReducer";
import useFetchAllData from "../../hooks/useFetchAllData";

const Home = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserDetails());

    }, [dispatch])

    const userDetails = useAppSelector(getUserDetails);
    useFetchAllData();

    const mockedAmount = {
        products: 15,
        jobs: 10,
        customers: 7,
        orders: 3,
    }

    const test = async () => {
        const res = await axios.get('http://localhost:8080/api/user');
        console.log(res);
    }

    return(
        <>
            <HomeComponent isLogged={userDetails} itemsAmount={mockedAmount} />
        </>
    )
}

export default Home;
