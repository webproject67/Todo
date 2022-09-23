import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { useLocation } from 'react-router-dom';
import AppRoute from '../../utils/const';
import Link from '../link';
import Button from '../button';
import TextField from '../text-field';
import './style.scss';

function Auth(): JSX.Element {
  const cn = bem('Auth');
  const location = useLocation();
  const isLogin = location.pathname === AppRoute.SignIn;

  return (
    <form className={cn()}>
      <h2 className={cn('title')}>{isLogin ? 'Войти' : 'Регистрация'}</h2>
      <div className={cn('textField')}>
        <TextField label="Логин" type="email" />
      </div>
      <div className={cn('textField')}>
        <TextField label="Пароль" type="password" />
      </div>
      {isLogin ? (
        <div className={cn('btns')}>
          <Button text="Войти" type="submit" />
          <Link href={AppRoute.SignUp}>Нет аккаунта?</Link>
        </div>
      ) : (
        <div className={cn('btns')}>
          <Button text="Регистрация" type="submit" />
          <Link href={AppRoute.SignIn}>Есть аккаунт?</Link>
        </div>
      )}
    </form>
  );
}

export default Auth;
