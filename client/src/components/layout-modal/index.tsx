import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.scss';

interface ILayoutModal {
  children: ReactNode;
}

function LayoutModal({ children }: ILayoutModal): JSX.Element {
  const cn = bem('LayoutModal');

  return <div className={cn()}>{children}</div>;
}

export default LayoutModal;
