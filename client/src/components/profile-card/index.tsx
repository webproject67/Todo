import React from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.scss';

function ProfileCard(): JSX.Element {
  const cn = bem('ProfileCard');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Мой профиль</h2>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Id: </span>
        123465789
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Email: </span>
        user@gmail.com
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>
          Email confirmed:{' '}
        </span>
        false
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Role: </span>
        user
      </p>
    </div>
  );
}

export default ProfileCard;
