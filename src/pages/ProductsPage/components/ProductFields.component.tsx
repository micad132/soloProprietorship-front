import TextFieldComponent from "../../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductAddRequestType} from "../../../types/RequestTypes";

interface Props {
    data: ProductAddRequestType,
    setProductValues: any,
    onClick: any,
    errorValues: string[],
}

const ProductFieldsComponent = ({data, setProductValues, onClick, errorValues}: Props) => {

    const {name, price, weight} = data;
    return(
        <>
                <TextFieldComponent
                    value={name}
                    label='Nazwa produktu'
                    isError={errorValues.includes('name')}
                    errorMsg={"Niepoprawna nazwa"}
                    setValues={setProductValues}
                    fieldName='name'
                />
                <TextFieldComponent
                    value={price}
                    label='Cena produktu'
                    isError={errorValues.includes('price')}
                    errorMsg={"Niepoprawna cena"}
                    setValues={setProductValues}
                    fieldName='price'
                />
                <TextFieldComponent
                    value={weight}
                    label='Waga produktu'
                    isError={errorValues.includes('weight')}
                    errorMsg={"Niepoprawna waga"}
                    setValues={setProductValues}
                    fieldName='weight'
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

export default ProductFieldsComponent;