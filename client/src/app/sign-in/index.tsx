import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import AuthContainer from '../../containers/auth';
import { useAppSelector } from '../../hooks';
import { getAuthorization } from '../../store/user-data/selectors';
import { AppRoute } from '../../utils/const';

function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const isAuthorization = useAppSelector(getAuthorization);

  useEffect(() => {
    if (isAuthorization) navigate(AppRoute.Root);
  }, [isAuthorization, navigate]);

  return (
    <LayoutFullHeight>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <AuthContainer />
        </LayoutCentering>
      </LayoutMain>
    </LayoutFullHeight>
  );
}

export default SignIn;
