import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../containers/header';
import LayoutComponent from '../../components/layout-component';
import TaskAdd from '../../containers/task-add';
import TaskList from '../../containers/task-list';
import {
  AuthorizationStatus,
  AppRoute,
  ComponentStyles,
} from '../../utils/const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-data/selectors';

function Root(): JSX.Element {
  const navigate = useNavigate();
  const authorization = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorization === AuthorizationStatus.NoAuth) navigate(AppRoute.SignIn);
  }, [authorization, navigate]);

  return (
    <LayoutComponent styles={ComponentStyles.FullHeight}>
      <Header />
      <LayoutComponent styles={ComponentStyles.Main}>
        <TaskAdd />
        <TaskList />
      </LayoutComponent>
    </LayoutComponent>
  );
}

export default Root;
