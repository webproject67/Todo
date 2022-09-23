import React, { ReactNode } from 'react';
import Link from '@mui/material/Link';
import AppRoute from '../../utils/const';

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
  return (
    <Link underline={underline} href={href}>
      {children}
    </Link>
  );
}

MyLink.defaultProps = {
  underline: 'hover',
};

export default MyLink;
