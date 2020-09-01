import React from "react";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import './DropDownSelect.scss';

const DropDownSelect = ({title, handleDayBirthday, data, value}) => {

    return (
        <FormControl className={"sign-in__date-birthday__"+title}>
            <InputLabel>{title}</InputLabel>
            <Select  onChange={event => handleDayBirthday(title, event.target.value)} value={value}>
                { data.map( (month) => {
                    return <MenuItem key={month} value={month}>{month}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
}

export default DropDownSelect;
