import React, { ReactNode } from 'react';
import { cn as bem } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import './style.scss';

interface IMyLink {
  href:
    | AppRoute.Root
    | AppRoute.SignUp
    | AppRoute.SignIn
    | AppRoute.Profile
    | AppRoute.Dashboard;
  children: string | ReactNode;
  underline?: 'none' | 'hover';
}

function MyLink({ href, underline, children }: IMyLink): JSX.Element {
  const cn = bem('Link');

  return (
    <Link className={cn({ underline })} to={href}>
      {children}
    </Link>
  );
}

MyLink.defaultProps = {
  underline: 'hover',
};

export default MyLink;
