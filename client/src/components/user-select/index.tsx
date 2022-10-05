import React from 'react';
import { cn as bem } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '../button';
import { UserOuput, UserInputSelect } from '../../types/user-type';
import { OnChangeType } from '../../types/event-type';
import './style.scss';

interface IUserSelect {
  name: keyof UserInputSelect;
  candidates: UserOuput[];
  value: string;
  onChange: OnChangeType;
  onClick: () => void;
}

function UserSelect({
  name,
  candidates,
  value,
  onChange,
  onClick,
}: IUserSelect): JSX.Element {
  const cn = bem('UserSelect');

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value, name);
  };

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Админ панель</h2>
      <div className={cn('form')}>
        <FormControl fullWidth>
          <InputLabel id="email">Пользователь</InputLabel>
          <Select
            labelId="email"
            label="Пользователь"
            name={name}
            value={value}
            onChange={handleChange}
          >
            {candidates.map((elem) => (
              <MenuItem key={elem.uuid} value={elem.uuid}>
                {elem.email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={cn('btn')}>
        <Button variant="contained" onClick={onClick}>
          Удалить пользователя
        </Button>
      </div>
    </div>
  );
}

export default UserSelect;
