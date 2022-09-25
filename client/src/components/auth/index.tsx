import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { useLocation } from 'react-router-dom';
import AppRoute from '../../utils/const';
import Link from '../link';
import Button from '../button';
import TextField from '../text-field';
import AuthInput from '../../types/auth-type';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import './style.scss';

interface IAuth {
  data: AuthInput;
  events: {
    onChange: OnChangeType;
    onSubmit: OnSubmitType;
  };
}

function Auth({ data, events }: IAuth): JSX.Element {
  const cn = bem('Auth');
  const location = useLocation();
  const isLogin = location.pathname === AppRoute.SignIn;

  return (
    <form className={cn()} onSubmit={events.onSubmit}>
      <h2 className={cn('title')}>{isLogin ? 'Войти' : 'Регистрация'}</h2>
      <div className={cn('textField')}>
        <TextField
          label="Логин"
          type="email"
          name="login"
          value={data.login}
          onChange={events.onChange}
        />
      </div>
      <div className={cn('textField')}>
        <TextField
          label="Пароль"
          type="password"
          name="password"
          value={data.password}
          onChange={events.onChange}
        />
      </div>
      {isLogin ? (
        <div className={cn('btns')}>
          <Button type="submit">Войти</Button>
          <Link href={AppRoute.SignUp}>Нет аккаунта?</Link>
        </div>
      ) : (
        <div className={cn('btns')}>
          <Button type="submit">Регистрация</Button>
          <Link href={AppRoute.SignIn}>Есть аккаунт?</Link>
        </div>
      )}
    </form>
  );
}

export default Auth;
