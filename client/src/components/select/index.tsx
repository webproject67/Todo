import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NameTextField } from '../../utils/const';
import { OnChangeType } from '../../types/event-type';

interface IMySelect {
  name: NameTextField.Email | NameTextField.Priority;
  options: {
    value: string;
    text: string;
  }[];
  value: string;
  id: NameTextField.Email | NameTextField.Priority;
  label: string;
  onChange: OnChangeType;
}

function MySelect({
  name,
  options,
  value,
  id,
  label,
  onChange,
}: IMySelect): JSX.Element {
  const handleChange = (event: SelectChangeEvent): void =>
    onChange(event.target.value, name);

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((elem) => (
          <MenuItem key={elem.value} value={elem.value}>
            {elem.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MySelect;
