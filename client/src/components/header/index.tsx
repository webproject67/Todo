import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { AppRoute } from '../../utils/const';
import Link from '../link';
import Button from '../button';
import './style.scss';

interface IHeader {
  email: string;
  isAuthorized: boolean;
  onClick: () => void;
}

function Header({ email, isAuthorized, onClick }: IHeader): JSX.Element {
  const cn = bem('Header');

  return (
    <header className={cn()}>
      {isAuthorized ? (
        <div className={cn('wrapper')}>
          <span className={cn('logo')}>
            <Link href={AppRoute.Root}>todo</Link>
          </span>
          <div className={cn('btns')}>
            <Link href={AppRoute.Profile}>{email}</Link>
            <span className={cn('dashboard')}>
              <Link href={AppRoute.Dashboard} underlinedHover={false}>
                <Button>Админ панель</Button>
              </Link>
            </span>
            <Button onClick={onClick}>Выйти</Button>
          </div>
        </div>
      ) : (
        <div className={cn('wrapper')}>
          <span className={cn('logo')}>todo</span>
          <Link href={AppRoute.SignIn} underlinedHover={false}>
            <Button>Авторизация</Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
