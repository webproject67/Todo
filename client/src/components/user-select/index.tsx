import React from 'react';
import { cn as bem } from '@bem-react/classname';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '../button';
import users from '../../utils/mocks/users';
import UserInput from '../../types/user-type';
import { OnChangeType } from '../../types/event-type';
import './style.scss';

interface IUserSelect {
  name: keyof UserInput;
  data: UserInput;
  onChange: OnChangeType;
}

function UserSelect({ name, data, onChange }: IUserSelect): JSX.Element {
  const cn = bem('UserSelect');

  const handleChange = (event: SelectChangeEvent) => {
    onChange(name, event.target.value);
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
            value={data.user}
            onChange={handleChange}
          >
            {users.rows.map((elem) => (
              <MenuItem key={elem.uuid} value={elem.email}>
                {elem.email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={cn('btn')}>
        <Button variant="contained">Удалить пользователя</Button>
      </div>
    </div>
  );
}

export default UserSelect;
