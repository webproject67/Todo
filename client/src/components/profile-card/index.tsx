import React from 'react';
import { cn as bem } from '@bem-react/classname';
import convertDate from '../../utils/convert-date';
import { Role } from '../../utils/const';
import { UserOuput } from '../../types/user-type';
import './style.scss';

interface IProfileCard {
  profile: UserOuput;
}

function ProfileCard({ profile }: IProfileCard): JSX.Element {
  const cn = bem('ProfileCard');

  const convertRole = (role: string): string => {
    if (role === Role.Admin) return 'администратор';
    if (role === Role.SuperAdmin) return 'супер администратор';
    return 'пользователь';
  };

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Мой профиль</h2>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Id: </span>
        {profile.uuid}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Email: </span>
        {profile.email}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>
          Email подтвержден:{' '}
        </span>
        {profile.isActivated ? 'да' : 'нет'}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>Роль: </span>
        {convertRole(profile.role)}
      </p>
      <p className={cn('text')}>
        <span className={cn('text', { fontWeight: 'bold' })}>
          Дата регистрации:{' '}
        </span>
        {convertDate(profile.createdAt)}
      </p>
    </div>
  );
}

export default ProfileCard;
