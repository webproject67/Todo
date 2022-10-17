import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { useLocation } from 'react-router-dom';
import Link from '../link';
import Button from '../button';
import TextField from '../text-field';
import {
  AppRoute,
  NameTextField,
  TypeTextField,
  TypeButton,
} from '../../utils/const';
import { UserInput } from '../../types/user-type';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import './style.scss';

interface IAuth {
  data: UserInput;
  events: {
    onChange: OnChangeType;
    onSubmitSignUp: OnSubmitType;
    onSubmitSignIn: OnSubmitType;
  };
}

function Auth({ data, events }: IAuth): JSX.Element {
  const cn = bem('Auth');
  const location = useLocation();
  const isLogin = location.pathname === AppRoute.SignIn;

  return (
    <form
      className={cn()}
      onSubmit={isLogin ? events.onSubmitSignIn : events.onSubmitSignUp}
    >
      <h2 className={cn('title')}>{isLogin ? 'Войти' : 'Регистрация'}</h2>
      <div className={cn('textField')}>
        <TextField
          label="Логин"
          type={TypeTextField.Email}
          name={NameTextField.Email}
          value={data.email}
          onChange={events.onChange}
        />
      </div>
      <div className={cn('textField')}>
        <TextField
          label="Пароль"
          type={TypeTextField.Password}
          name={NameTextField.Password}
          value={data.password}
          onChange={events.onChange}
        />
      </div>
      {isLogin ? (
        <div className={cn('btns')}>
          <Button type={TypeButton.Submit}>Войти</Button>
          <Link href={AppRoute.SignUp}>Нет аккаунта?</Link>
        </div>
      ) : (
        <div className={cn('btns')}>
          <Button type={TypeButton.Submit}>Регистрация</Button>
          <Link href={AppRoute.SignIn}>Есть аккаунт?</Link>
        </div>
      )}
    </form>
  );
}

export default React.memo(Auth);
