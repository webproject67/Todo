import React from 'react';
import { AppRoute } from '../../utils/const';
import Protected from '../../containers/protected';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../containers/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import AuthContainer from '../../containers/auth';

function SignIn(): JSX.Element {
  return (
    <Protected redirect={AppRoute.Root}>
      <LayoutFullHeight>
        <Header />
        <LayoutMain>
          <LayoutCentering>
            <AuthContainer />
          </LayoutCentering>
        </LayoutMain>
      </LayoutFullHeight>
    </Protected>
  );
}

export default SignIn;
