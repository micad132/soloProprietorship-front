import TextFieldComponent from "../../../components/TextField.component";
import SelectComponent from "../../../components/SelectComponent.component";
import MultipleSelect from "../../../components/MultipleSelectComponent.component";
import {Button} from "@mui/material";

interface Props {
    values: any,
    onClick: () => void,
    errorValues: string[],
    setValues: any,
    menuItems: any,


}

const OrderFieldsComponent = ({values, onClick, errorValues, setValues, menuItems}: Props) => {

    const {price, description, idCustomer, idOfProducts, idOfJobs} = values;
    return(
        <>
            <TextFieldComponent
                value={price}
                label='Cena'
                errorMsg='Niepoprawna cena!'
                fieldName='price'
                setValues={setValues}
            />
            <TextFieldComponent
                value={description}
                label='Opis'
                errorMsg='Niepoprawny opis!'
                fieldName='description'
                setValues={setValues}
            />
            <SelectComponent
                label='Id klienta'
                menuItems={menuItems.customerIds}
                setValues={setValues}
                text='Id klienta dodaj'
                value={idCustomer}
                textField='idCustomer'
            />
            <MultipleSelect
                label='Id produktow'
                menuItems={menuItems.productsIds}
                setValues={setValues}
                textField='idOfProducts'
                value={idOfProducts}
            />
            <MultipleSelect
                label='Id uslug'
                menuItems={menuItems.jobsIds}
                setValues={setValues}
                textField='idOfJobs'
                value={idOfJobs}
            />
            <Button
                variant='contained'
                onClick={onClick}
            >
                Dodaj
            </Button>
        </>
    )
}

export default OrderFieldsComponent;