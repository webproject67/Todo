import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './root';
import SignUp from './sign-up';
import SignIn from './sign-in';
import Profile from './profile';
import Dashboard from './dashboard';
import AppRoute from '../utils/const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Root />} />
        <Route path={AppRoute.SignUp} element={<SignUp />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Profile} element={<Profile />} />
        <Route path={AppRoute.Dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
