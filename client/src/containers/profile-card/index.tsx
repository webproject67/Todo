import React from 'react';
import ProfileCard from '../../components/profile-card';
import { useAppSelector } from '../../hooks';
import { getCandidate } from '../../store/user-data/selectors';
import { UserOuput } from '../../types/user-type';

function ProfileCardContainer(): JSX.Element {
  const profile = useAppSelector(getCandidate) as UserOuput;

  return <ProfileCard profile={profile} />;
}

export default ProfileCardContainer;
