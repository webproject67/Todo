import React from 'react';
import { useAppSelector } from '../../hooks';
import {
  getCandidate,
  getAuthorization,
} from '../../store/user-data/selectors';
import Header from '../../components/header';

function HeaderContainer(): JSX.Element {
  const candidate = useAppSelector(getCandidate);
  const isAuthorization = useAppSelector(getAuthorization);

  return <Header candidate={candidate} isAuthorization={isAuthorization} />;
}

export default HeaderContainer;
