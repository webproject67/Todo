import React from 'react';
import { cn as bem } from '@bem-react/classname';
import Select from '../select';
import Button from '../button';
import { NameTextField, VariantButton, Role } from '../../utils/const';
import { OnChangeType } from '../../types/event-type';
import { UsersOuput } from '../../types/user-type';
import './style.scss';

interface IUserSelect {
  role: string;
  name: NameTextField.Email;
  candidates: UsersOuput;
  value: string;
  id: NameTextField.Email;
  label: string;
  onChange: OnChangeType;
  onClick: () => void;
}

function UserSelect({
  role,
  name,
  candidates,
  value,
  id,
  label,
  onChange,
  onClick,
}: IUserSelect): JSX.Element {
  const cn = bem('UserSelect');

  const convertCandidates: {
    value: string;
    text: string;
  }[] = candidates.map((elem) => ({ value: elem.uuid, text: elem.email }));

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Админ панель</h2>
      <div className={cn('select')}>
        <Select
          name={name}
          options={convertCandidates}
          value={value}
          id={id}
          label={label}
          onChange={onChange}
        />
      </div>
      {role === Role.SuperAdmin && (
        <div className={cn('btn')}>
          <Button variant={VariantButton.Contained} onClick={onClick}>
            Удалить пользователя
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserSelect;
