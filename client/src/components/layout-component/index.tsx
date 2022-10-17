import React, { PropsWithChildren } from 'react';
import { cn as bem } from '@bem-react/classname';
import { ComponentStyles } from '../../utils/const';
import './style.scss';

type LayoutComponent = PropsWithChildren<{
  styles: ComponentStyles;
}>;

function LayoutComponent({ children, styles }: LayoutComponent): JSX.Element {
  const cn = bem('Component');

  return <div className={cn({ styles })}>{children}</div>;
}

export default React.memo(LayoutComponent);
