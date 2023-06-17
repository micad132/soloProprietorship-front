import SingleCard from "./SingleCard.component";
import CardWrapper from "./CardWrapper.component";
import NotLoggedComponent from "../../../components/NotLogged.component";
import {UserDetailsDTO} from "../../../types/ResponseTypes";

interface Props {
    isLogged: UserDetailsDTO,
    itemsAmount: any,
}
const HomeComponent = ({isLogged, itemsAmount}: Props) => {

    const homeContent = isLogged
        ? <CardWrapper>
            <SingleCard  amount={itemsAmount.products} text={'Produkty'}/>
            <SingleCard  amount={itemsAmount.jobs} text={'Uslugi'}/>
            <SingleCard  amount={itemsAmount.customers} text={'Klienci'}/>
            <SingleCard  amount={itemsAmount.orders} text={'Zamowienia'}/>
        </CardWrapper>
        : <NotLoggedComponent />;

    return(
        <div data-testid='homeComponent'>
            {homeContent}
        </div>
    )
}

export default HomeComponent;