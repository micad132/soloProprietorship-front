import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Dispatch, SetStateAction, useState} from "react";
import {TransactionAddRequestType} from "../types/RequestTypes";
import ErrorComponentComponent from "./ErrorComponent.component";

interface Props {
    text: string,
    value: string,
    label: string,
    setValues: Dispatch<SetStateAction<any>>,
    menuItems: any,
    textField: string,
    isError: boolean,
    errorMsg: string,
}

const SelectComponent = ({text, value, label, setValues, menuItems, textField, isError, errorMsg}: Props) => {


    const handleChange = (event: SelectChangeEvent) => {
        setValues((prevState: any) => ({
            ...prevState,
            [textField]: event.target.value as string,
        }))
    };

    const menuItemsProper = menuItems.map((id: number) => <MenuItem value={id}>{id}</MenuItem>)

    return(
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{text}</InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {menuItemsProper}
                </Select>
                {isError && <ErrorComponentComponent errorMsg={errorMsg} />}
            </FormControl>
        </Box>
    )
}

export default SelectComponent;