import SingleCard from "./SingleCard.component";
import CardWrapper from "./CardWrapper.component";

interface Props {
    isLogged: boolean,
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
        : <h1>Nie jesteś zalogowany. Zaloguj się aby w pełni korzystać z portalu!</h1>;

    return(
        <div data-testid='homeComponent'>
            {homeContent}
        </div>
    )
}

export default HomeComponent;