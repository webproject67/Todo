import React from 'react';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import AuthContainer from '../../containers/auth';

function SignIn(): JSX.Element {
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
