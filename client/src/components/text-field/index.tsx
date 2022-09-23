import React from 'react';
import TextField from '@mui/material/TextField';

interface IMyTextField {
  label: string;
  type?: 'text' | 'email' | 'password';
}

function MyTextField({ label, type }: IMyTextField): JSX.Element {
  return <TextField fullWidth variant="standard" label={label} type={type} />;
}

MyTextField.defaultProps = {
  type: 'text',
};

export default MyTextField;
