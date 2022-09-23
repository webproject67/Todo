import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import LayoutCentering from '../../components/layout-centering';
import ProfileCard from '../../components/profile-card';

function Profile(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <LayoutCentering>
          <ProfileCard />
        </LayoutCentering>
      </LayoutMain>
    </>
  );
}

export default Profile;
