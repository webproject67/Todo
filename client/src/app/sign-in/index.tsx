import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import Auth from '../../components/auth';

function SignIn(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <Auth />
        </LayoutCentering>
      </LayoutMain>
    </>
  );
}

export default SignIn;
