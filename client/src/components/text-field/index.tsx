import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import {
  NameTextField,
  TypeTextField,
  VariantTextField,
} from '../../utils/const';
import { OnChangeType } from '../../types/event-type';

interface IMyTextField {
  label: string;
  name: NameTextField.Email | NameTextField.Password | NameTextField.Task;
  value: string;
  onChange: OnChangeType;
  type?: TypeTextField;
}

function MyTextField({
  label,
  name,
  value,
  type,
  onChange,
}: IMyTextField): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    onChange(event.target.value, name);

  return (
    <TextField
      fullWidth
      variant={VariantTextField.Standard}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}

MyTextField.defaultProps = {
  type: TypeTextField.Text,
};

export default MyTextField;
