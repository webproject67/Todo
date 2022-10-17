import React, { useState, useCallback } from 'react';
import Auth from '../../components/auth';
import { useAppDispatch } from '../../hooks';
import { signUpAction, signInAction } from '../../store/api-actions';
import { OnChangeType, OnSubmitType } from '../../types/event-type';

interface ICallbacks {
  onChange: OnChangeType;
  onSubmitSignUp: OnSubmitType;
  onSubmitSignIn: OnSubmitType;
}

function AuthContainer(): JSX.Element {
  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const callbacks: ICallbacks = {
    onChange: useCallback((value, name) => {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }, []),
    onSubmitSignUp: useCallback(
      (event) => {
        event.preventDefault();
        dispatch(signUpAction(data));
      },
      [data, dispatch]
    ),
    onSubmitSignIn: useCallback(
      (event) => {
        event.preventDefault();
        dispatch(signInAction(data));
      },
      [data, dispatch]
    ),
  };

  return <Auth data={data} events={callbacks} />;
}

export default React.memo(AuthContainer);
