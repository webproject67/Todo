import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../containers/header';
import LayoutComponent from '../../components/layout-component';
import ProfileCard from '../../containers/profile-card';
import {
  AuthorizationStatus,
  AppRoute,
  ComponentStyles,
} from '../../utils/const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function Profile(): JSX.Element {
  const navigate = useNavigate();
  const authorization = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorization === AuthorizationStatus.NoAuth) navigate(AppRoute.SignIn);
  }, [authorization, navigate]);

  return (
    <LayoutComponent styles={ComponentStyles.FullHeight}>
      <Header />
      <LayoutComponent styles={ComponentStyles.Main}>
        <LayoutComponent styles={ComponentStyles.Centre}>
          <LayoutComponent styles={ComponentStyles.Frame}>
            <ProfileCard />
          </LayoutComponent>
        </LayoutComponent>
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default Profile;
