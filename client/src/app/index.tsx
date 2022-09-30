import React, { CSSProperties } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './root';
import SignUp from './sign-up';
import SignIn from './sign-in';
import Profile from './profile';
import Dashboard from './dashboard';
import { AppRoute } from '../utils/const';
import { useAppSelector } from '../hooks';
import { getLoadedUserData } from '../store/user-data/selectors';
import LayoutModal from '../components/layout-modal';

const override: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

function App(): JSX.Element {
  const isLoadedUserData = useAppSelector(getLoadedUserData);

  return (
    <BrowserRouter>
      {isLoadedUserData && (
        <LayoutModal>
          <ClockLoader
            loading={isLoadedUserData}
            cssOverride={override}
            size={150}
            color="#ffffff"
          />
        </LayoutModal>
      )}
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
