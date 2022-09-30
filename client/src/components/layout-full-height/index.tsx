import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.scss';

interface ILayoutFullHeight {
  children: ReactNode;
}

function LayoutFullHeight({ children }: ILayoutFullHeight): JSX.Element {
  const cn = bem('LayoutFullHeight');

  return <div className={cn()}>{children}</div>;
}

export default LayoutFullHeight;
