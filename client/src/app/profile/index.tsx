import React from 'react';
import { AppRoute } from '../../utils/const';
import Protected from '../../containers/protected';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../containers/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import ProfileCard from '../../components/profile-card';
import { useAppSelector } from '../../hooks';
import { getCandidate } from '../../store/user-data/selectors';

function Profile(): JSX.Element {
  const candidate = useAppSelector(getCandidate);

  return (
    <Protected redirect={AppRoute.SignIn}>
      <LayoutFullHeight>
        <Header />
        <LayoutMain>
          <LayoutCentering>
            <ProfileCard candidate={candidate} />
          </LayoutCentering>
        </LayoutMain>
      </LayoutFullHeight>
    </Protected>
  );
}

export default Profile;
