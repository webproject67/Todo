import React from 'react';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import ProfileCard from '../../components/profile-card';

function Profile(): JSX.Element {
  return (
    <LayoutFullHeight>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <ProfileCard />
        </LayoutCentering>
      </LayoutMain>
    </LayoutFullHeight>
  );
}

export default Profile;
