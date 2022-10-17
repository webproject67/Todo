import React from 'react';
import Header from '../../components/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { signOutAction } from '../../store/api-actions';
import {
  getCandidate,
  getAuthorizationStatus,
} from '../../store/user-data/selectors';
import { UserOuput } from '../../types/user-type';
import { AuthorizationStatus } from '../../utils/const';

interface ICallbacks {
  onClick: () => void;
}

function HeaderContainer(): JSX.Element {
  const { email } = useAppSelector(getCandidate) as UserOuput;
  const authorization = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const callbacks: ICallbacks = {
    onClick: () => dispatch(signOutAction()),
  };

  return (
    <Header
      email={email}
      isAuthorized={authorization === AuthorizationStatus.Auth}
      onClick={callbacks.onClick}
    />
  );
}

export default HeaderContainer;
