import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../containers/header';
import LayoutComponent from '../../components/layout-component';
import Auth from '../../containers/auth';
import {
  AuthorizationStatus,
  AppRoute,
  ComponentStyles,
} from '../../utils/const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function SignUp(): JSX.Element {
  const navigate = useNavigate();
  const authorization = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorization === AuthorizationStatus.Auth) navigate(AppRoute.Root);
  }, [authorization, navigate]);

  return (
    <LayoutComponent styles={ComponentStyles.FullHeight}>
      <Header />
      <LayoutComponent styles={ComponentStyles.Main}>
        <LayoutComponent styles={ComponentStyles.Centre}>
          <LayoutComponent styles={ComponentStyles.Frame}>
            <Auth />
          </LayoutComponent>
        </LayoutComponent>
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default React.memo(SignUp);
