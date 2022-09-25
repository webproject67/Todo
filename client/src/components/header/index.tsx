import React from 'react';
import { cn as bem } from '@bem-react/classname';
import AppRoute from '../../utils/const';
import Link from '../link';
import Button from '../button';
import './style.scss';

function Header(): JSX.Element {
  const cn = bem('Header');

  return (
    <header className={cn()}>
      <div className={cn('wrapper')}>
        <span className={cn('logo')}>
          <Link href={AppRoute.Root}>todo</Link>
        </span>
        <div className={cn('btns')}>
          <Link href={AppRoute.Profile}>user@gmail.com</Link>
          <span className={cn('dashboard')}>
            <Link href={AppRoute.Dashboard} underline="none">
              <Button>Админ панель</Button>
            </Link>
          </span>
          <Link href={AppRoute.SignIn} underline="none">
            <Button>Войти</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
