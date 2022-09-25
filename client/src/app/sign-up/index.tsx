import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import AuthContainer from '../../containers/auth';

function SignUp(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <AuthContainer />
        </LayoutCentering>
      </LayoutMain>
    </>
  );
}

export default SignUp;
