import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { TypeButton, VariantButton } from '../../utils/const';

interface IMyButton {
  children: string | ReactNode;
  type?: TypeButton;
  variant?: VariantButton;
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
  type: TypeButton.Button,
  variant: VariantButton.Outlined,
  onClick: () => null,
};

export default MyButton;
