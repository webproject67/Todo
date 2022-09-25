import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface IMyButton {
  children: string | ReactNode;
  type?: 'button' | 'submit';
  variant?: 'outlined' | 'contained';
  onClick?: () => void;
}

function MyButton({
  children,
  type,
  variant,
  onClick,
}: IMyButton): JSX.Element {
  return (
    <Button variant={variant} type={type} onClick={onClick}>
      {children}
    </Button>
  );
}

MyButton.defaultProps = {
  type: 'button',
  variant: 'outlined',
  onClick: () => null,
};

export default MyButton;
