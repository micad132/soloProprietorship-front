import TextFieldComponent from "../../../components/TextField.component";
import {Button} from "@mui/material";
import {ProductAddRequestType} from "../../../types/RequestTypes";

interface Props {
    data: ProductAddRequestType,
    setProductValues: any,
    onClick: any,
}

const ProductFieldsComponent = ({data, setProductValues, onClick}: Props) => {

    const {name, price, weight} = data;
    return(
        <>
                <TextFieldComponent
                    value={name}
                    label='Nazwa produktu'
                    errorMsg={""}
                    setValues={setProductValues}
                    fieldName='name'
                />
                <TextFieldComponent
                    value={price}
                    label='Cena produktu'
                    errorMsg={""}
                    setValues={setProductValues}
                    fieldName='price'
                />
                <TextFieldComponent
                    value={weight}
                    label='Waga produktu'
                    errorMsg={""}
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