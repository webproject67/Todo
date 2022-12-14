import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../containers/header';
import LayoutComponent from '../../components/layout-component';
import UserSelect from '../../containers/user-select';
import TaskList from '../../containers/task-list';
import {
  AuthorizationStatus,
  AppRoute,
  ComponentStyles,
  Role,
} from '../../utils/const';
import { useAppSelector } from '../../hooks';
import {
  getCandidate,
  getAuthorizationStatus,
} from '../../store/user-data/selectors';
import { UserOuput } from '../../types/user-type';

function Dashboard(): JSX.Element {
  const navigate = useNavigate();
  const authorization = useAppSelector(getAuthorizationStatus);
  const { role } = useAppSelector(getCandidate) as UserOuput;

  useEffect(() => {
    if (authorization === AuthorizationStatus.NoAuth) navigate(AppRoute.SignIn);
  }, [authorization, navigate]);

  return (
    <LayoutComponent styles={ComponentStyles.FullHeight}>
      <Header />
      <LayoutComponent styles={ComponentStyles.Main}>
        {role === Role.User ? (
          <LayoutComponent styles={ComponentStyles.Centre}>
            <h1>403 - нет доступа, обратитесь к разработчику сайта.</h1>
          </LayoutComponent>
        ) : (
          <>
            <UserSelect />
            <TaskList />
          </>
        )}
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default React.memo(Dashboard);
