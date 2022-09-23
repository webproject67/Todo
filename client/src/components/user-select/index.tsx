import React from 'react';
import { cn as bem } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '../button';
import users from '../../utils/mocks/users';
import './style.scss';

function UserSelect(): JSX.Element {
  const cn = bem('UserSelect');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Админ панель</h2>
      <div className={cn('form')}>
        <FormControl fullWidth>
          <InputLabel id="email">Пользователь</InputLabel>
          <Select labelId="email" value="" label="Пользователь">
            {users.rows.map((elem) => (
              <MenuItem key={elem.uuid} value={elem.email}>
                {elem.email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={cn('btn')}>
        <Button text="Удалить пользователя" variant="contained" />
      </div>
    </div>
  );
}

export default UserSelect;
