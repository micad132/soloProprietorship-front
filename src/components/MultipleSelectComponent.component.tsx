import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Dispatch, SetStateAction, useState} from "react";
import {FormControl, InputLabel, MenuItem, OutlinedInput} from "@mui/material";
import ErrorComponentComponent from "./ErrorComponent.component";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

interface Props {
    label: string,
    menuItems: any,
    setValues: Dispatch<SetStateAction<any>>,
    value: string[],
    textField: string,
    isError: boolean,
    errorMsg: string,
}

const MultipleSelect = ({label, menuItems, setValues, textField, value, isError, errorMsg}: Props) => {

    const handleChange = (event: SelectChangeEvent<any>) => {
        const {target: { value }} = event;
        setValues((prevState: any) => ({
            ...prevState,
            [textField]: typeof value === 'string' ? value.split(',') : value,
        }))
    };

    const menuItemsProper = menuItems.map((id: number) => <MenuItem key={id} value={id}>{id}</MenuItem>)
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    MenuProps={MenuProps}
                >
                    {menuItemsProper}
                </Select>
                {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
            </FormControl>
        </div>
    );
}

export default MultipleSelect;