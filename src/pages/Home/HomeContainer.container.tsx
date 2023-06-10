import HomeComponent from "./components/HomeComponent.component";

const Home = () => {

    const mockedAmount = {
        products: 15,
        jobs: 10,
        customers: 7,
        orders: 3,
    }
    return(
            <HomeComponent isLogged={true} itemsAmount={mockedAmount} />
    )
}

export default Home;
