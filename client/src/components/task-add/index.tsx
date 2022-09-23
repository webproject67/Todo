import React from 'react';
import { cn as bem } from '@bem-react/classname';
import TextField from '../text-field';
import Button from '../button';
import './style.scss';

function TaskAdd(): JSX.Element {
  const cn = bem('TaskAdd');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Добавить задачу:</h2>
      <form className={cn('form')}>
        <TextField label="Введите название задачи" />
        <div className={cn('btn')}>
          <Button text="Добавить" type="submit" variant="contained" />
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
