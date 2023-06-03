import Footer from "../layout/footer";
import {render, screen, fireEvent} from "@testing-library/react";
import Header from "../layout/header";
import {BrowserRouter} from "react-router-dom";
import ErrorComponentComponent from "../components/ErrorComponent.component";
import ModalComponentComponent from "../components/ModalComponent.component";
import TableButton from "../components/TableButton.component";
import DeleteIcon from "@mui/icons-material/Delete";
import DeletingComponent from "../components/DeletingComponent.component";
import AuthorizationWrapperComponent from "../components/AuthorizationWrapper.component";
import AddingComponent from "../components/AddingComponent";


const MockedHeaderPage = () => <BrowserRouter><Header /></BrowserRouter>

it('should render error component with proper text', () => {
    render(<ErrorComponentComponent errorMsg={'Test blad'} />)
    const errorText = screen.getByTestId('errorMsg');
    expect(errorText).toHaveTextContent('Test blad');
    expect(errorText).toBeInTheDocument();
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

it('should deleting component contain proper text', () => {
    render(<DeletingComponent id={1} name='marchewka' onClick={() => {}} />);
    const text = screen.getByTestId('deletingWrapperText');
    const expectedText = 'Aby usunac marchewka wpisz odpowiedni kod';
    expect(text).toHaveTextContent(expectedText);
})

it('should authorization wrapper contain proper elements', () => {
    render(<AuthorizationWrapperComponent  children={<h1 data-testid='test'>Test</h1>} />);
    const authorizationWrapperComponent = screen.getByTestId('authorizationWrapper');
    const heading = screen.getByTestId('test');
    expect(authorizationWrapperComponent).toContainElement(heading);
})

it('should adding component have proper content', () => {
    render(<AddingComponent text={'Dodaj klienta'} isOpen={true} setIsOpen={() => {}} modalContent={<h1 data-testid='test'>Test</h1>} />);
    const addingButton = screen.getByTestId('addingComponentButton');
    const modalComponent = screen.getByTestId('modal');
    const heading = screen.getByTestId('test');
    fireEvent.click(addingButton);
    expect(addingButton).toHaveTextContent('Dodaj');
    expect(modalComponent).toContainElement(heading);

})