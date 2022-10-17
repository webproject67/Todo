import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import './style.scss';

interface IMyLink {
  href: AppRoute;
  children: string | ReactNode;
  underlinedHover?: boolean;
}

function MyLink({ href, children, underlinedHover }: IMyLink): JSX.Element {
  const cn = bem('Link');

  return (
    <Link className={cn({ underlinedHover })} to={href}>
      {children}
    </Link>
  );
}

MyLink.defaultProps = {
  underlinedHover: true,
};

export default React.memo(MyLink);
