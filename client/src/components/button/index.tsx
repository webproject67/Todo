import React from 'react';
import Button from '@mui/material/Button';

interface IMyButton {
  text: string;
  type?: 'button' | 'submit';
  variant?: 'outlined' | 'contained';
}

function MyButton({ text, type, variant }: IMyButton): JSX.Element {
  return (
    <Button variant={variant} type={type}>
      {text}
    </Button>
  );
}

MyButton.defaultProps = {
  type: 'button',
  variant: 'outlined',
};

export default MyButton;
