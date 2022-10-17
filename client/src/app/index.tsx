import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './root';
import SignUp from './sign-up';
import SignIn from './sign-in';
import Profile from './profile';
import Dashboard from './dashboard';
import NotFoundScreen from './page-not-found';
import { useAppSelector, useAppDispatch } from '../hooks';
import {
  getAuthorizationStatus,
  getLoading as getLoadingUser,
} from '../store/user-data/selectors';
import { getLoading as getLoadingTask } from '../store/task-data/selectors';
import { checkAuthAction } from '../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../utils/const';
import Spinner from '../components/spinner';

function App(): JSX.Element {
  const authorization = useAppSelector(getAuthorizationStatus);
  const isLoadingUser = useAppSelector(getLoadingUser);
  const isLoadingTask = useAppSelector(getLoadingTask);
  const dispatch = useAppDispatch();
  const isLoadingTotal =
    isLoadingUser ||
    isLoadingTask ||
    authorization === AuthorizationStatus.Unknown;

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Root />} />
        <Route path={AppRoute.SignUp} element={<SignUp />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Profile} element={<Profile />} />
        <Route path={AppRoute.Dashboard} element={<Dashboard />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      {isLoadingTotal && <Spinner />}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
