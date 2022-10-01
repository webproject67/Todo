import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorization } from '../../store/user-data/selectors';
import { AppRoute } from '../../utils/const';
import Spinner from '../../components/spinner';

interface IProtectedContainer {
  children: ReactNode;
  redirect: AppRoute;
}

function ProtectedContainer({
  children,
  redirect,
}: IProtectedContainer): JSX.Element {
  const navigate = useNavigate();
  const isAuthorization = useAppSelector(getAuthorization);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthorization && redirect === AppRoute.SignIn)
      navigate(AppRoute.SignIn);

    if (isAuthorization && redirect === AppRoute.Root) navigate(AppRoute.Root);

    setLoading(false);
  }, [isAuthorization, isLoading, redirect, navigate]);

  return <div>{isLoading ? <Spinner isLoaded={isLoading} /> : children}</div>;
}

export default ProtectedContainer;
