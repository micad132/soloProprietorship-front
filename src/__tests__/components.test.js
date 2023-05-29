import Footer from "../layout/footer";
import {render, screen} from "@testing-library/react";
import Header from "../layout/header";
import {BrowserRouter} from "react-router-dom";
import ErrorComponentComponent from "../components/ErrorComponent.component";
import ModalComponentComponent from "../components/ModalComponent.component";
import TableButton from "../components/TableButton.component";
import DeleteIcon from "@mui/icons-material/Delete";


const MockedHeaderPage = () => <BrowserRouter><Header /></BrowserRouter>

it('should render error component with proper text', () => {
    render(<ErrorComponentComponent errorMsg={'Test blad'} />)
    const errorText = screen.getByTestId('errorMsg');
    expect(errorText).toHaveTextContent('Test blad');
})

it('should render proper footer text', () => {
    render(<Footer />)
    const headingElement = screen.getByTestId('footer');
    expect(headingElement).toHaveTextContent('Projekt wykonany przez Michala, Daniela, Karola');
})

it('should render proper header text', () => {
    render(<MockedHeaderPage />)
    const headingElement = screen.getByTestId('header');
    expect(headingElement).toHaveTextContent('Witaj na portalu wlasnej firmy!');
})

it('should modal be visible', () => {
    render(<ModalComponentComponent isOpen={true} onClose={() => {}}  children={[]}/>);
    const modalComponent = screen.getByTestId('modal');
    expect(modalComponent).toBeInTheDocument();
})

it('should model contain header', () => {
    render(<ModalComponentComponent isOpen={true} onClose={() => {}}  children={<h1 data-testid='test'>Test</h1>}/>);
    const modalComponent = screen.getByTestId('modal');
    const heading = screen.getByTestId('test');
    expect(modalComponent).toContainElement(heading);
})

// it('should table button contain proper icon and text', () => {
//     render(<TableButton  icon={<DeleteIcon />} text='Usun' />);
//     const tableButton = screen.getByTestId('tableButton');
//     expect(tableButton).toHaveTextContent('Usun');
//     expect(tableButton.getAttribute('startIcon')).toBe('<DeleteIcon />');
//
// })