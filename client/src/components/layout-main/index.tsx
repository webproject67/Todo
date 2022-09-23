import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.scss';

interface ILayoutMain {
  children: ReactNode;
}

function LayoutMain({ children }: ILayoutMain): JSX.Element {
  const cn = bem('LayoutMain');

  return <main className={cn()}>{children}</main>;
}

export default LayoutMain;
