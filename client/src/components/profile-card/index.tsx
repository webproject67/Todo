import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { UserCandidate } from '../../types/user-type';
import './style.scss';

interface IProfileCard {
  candidate: UserCandidate;
}

function ProfileCard({ candidate }: IProfileCard): JSX.Element {
  const cn = bem('ProfileCard');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Мой профиль</h2>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Id: </span>
        {candidate.uuid}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Email: </span>
        {candidate.email}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>
          Email confirmed:{' '}
        </span>
        {candidate.isActivated ? 'true' : 'false'}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Role: </span>
        {candidate.role}
      </p>
    </div>
  );
}

export default ProfileCard;
