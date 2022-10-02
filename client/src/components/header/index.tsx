import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { AppRoute, Role } from '../../utils/const';
import Link from '../link';
import Button from '../button';
import './style.scss';
import { UserCandidate } from '../../types/user-type';
import { OnClickType } from '../../types/event-type';

interface IHeader {
  candidate: UserCandidate;
  isAuthorization: boolean;
  onClick: OnClickType;
}

function Header({ candidate, isAuthorization, onClick }: IHeader): JSX.Element {
  const cn = bem('Header');

  return (
    <header className={cn()}>
      <div className={cn('wrapper')}>
        <span className={cn('logo')}>
          <Link href={AppRoute.Root}>todo</Link>
        </span>
        <div className={cn('btns')}>
          <span className={cn('profile')}>
            <Link href={AppRoute.Profile}>{candidate.email}</Link>
          </span>
          {candidate.role !== Role.User && (
            <span className={cn('dashboard')}>
              <Link href={AppRoute.Dashboard} underline="none">
                <Button>Админ панель</Button>
              </Link>
            </span>
          )}
          {isAuthorization ? (
            <Button onClick={onClick}>Выйти</Button>
          ) : (
            <Link href={AppRoute.SignIn} underline="none">
              <Button>Войти</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
