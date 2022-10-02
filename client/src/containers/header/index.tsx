import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  getCandidate,
  getAuthorization,
} from '../../store/user-data/selectors';
import Header from '../../components/header';
import { signOutAction } from '../../store/api-actions';
import { OnClickType } from '../../types/event-type';

interface ICallbacks {
  onClick: OnClickType;
}

function HeaderContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const candidate = useAppSelector(getCandidate);
  const isAuthorization = useAppSelector(getAuthorization);

  const callbacks: ICallbacks = {
    onClick: () => {
      dispatch(signOutAction());
    },
  };

  return (
    <Header
      candidate={candidate}
      isAuthorization={isAuthorization}
      onClick={callbacks.onClick}
    />
  );
}

export default HeaderContainer;
