import HomeComponent from "./components/HomeComponent.component";
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import {fetchUserDetails, getUserDetails} from "../../store/reducers/utilsReducer";
import useFetchAllData from "../../hooks/useFetchAllData";
import {getAllProducts} from "../../store/reducers/productReducer";
import {getAllJobs} from "../../store/reducers/jobReducer";
import {getAllCustomers} from "../../store/reducers/customerReducer";
import {getAllTransactions} from "../../store/reducers/transactionReducer";

const Home = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserDetails());

    }, [dispatch])

    const userDetails = useAppSelector(getUserDetails);
    const products = useAppSelector(getAllProducts);
    const jobs = useAppSelector(getAllJobs);
    const customers = useAppSelector(getAllCustomers);
    const orders = useAppSelector(getAllTransactions);
    useFetchAllData();

    const mockedAmount = {
        products: products.length,
        jobs: jobs.length,
        customers: customers.length,
        orders: orders.length,
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
