import React, { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import AuthInput from '../../types/auth-type';
import TaskInput from '../../types/task-type';
import { OnChangeType } from '../../types/event-type';

interface IMyTextField {
  label: string;
  name: keyof AuthInput | keyof TaskInput;
  value: string;
  type?: 'text' | 'email' | 'password';
  onChange: OnChangeType;
}

function MyTextField({
  label,
  type,
  name,
  value,
  onChange,
}: IMyTextField): JSX.Element {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    onChange(name, evt.target.value);
  };

  return (
    <TextField
      fullWidth
      variant="standard"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}

MyTextField.defaultProps = {
  type: 'text',
};

export default MyTextField;
