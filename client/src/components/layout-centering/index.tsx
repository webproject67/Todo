import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.scss';

interface ILayoutCentering {
  children: ReactNode;
}

function LayoutCentering({ children }: ILayoutCentering): JSX.Element {
  const cn = bem('LayoutCentering');

  return <div className={cn()}>{children}</div>;
}

export default LayoutCentering;
