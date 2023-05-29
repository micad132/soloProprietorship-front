import SingleCard from "./SingleCard.component";
import CardWrapper from "./CardWrapper.component";

interface Props {
    isLogged: boolean,
}
const HomeComponent = ({isLogged}: Props) => {

    const homeContent = isLogged
        ? <CardWrapper>
            <SingleCard  amount={15} text={'Produkty'}/>
            <SingleCard  amount={5} text={'Uslugi'}/>
            <SingleCard  amount={3} text={'Klienci'}/>
            <SingleCard  amount={2} text={'Zamowienia'}/>
        </CardWrapper>
        : <h1>Nie jesteś zalogowany. Zaloguj się aby w pełni korzystać z portalu!</h1>;

    return(
        <div>
            {homeContent}
        </div>
    )
}

export default HomeComponent;