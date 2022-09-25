import React from 'react';
import { cn as bem } from '@bem-react/classname';
import TextField from '../text-field';
import Button from '../button';
import TaskInput from '../../types/task-type';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import './style.scss';

interface ITaskAdd {
  data: TaskInput;
  events: {
    onChange: OnChangeType;
    onSubmit: OnSubmitType;
  };
}

function TaskAdd({ data, events }: ITaskAdd): JSX.Element {
  const cn = bem('TaskAdd');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Добавить задачу:</h2>
      <form className={cn('form')} onSubmit={events.onSubmit}>
        <TextField
          label="Введите название задачи"
          name="task"
          value={data.task}
          onChange={events.onChange}
        />
        <div className={cn('btn')}>
          <Button type="submit" variant="contained">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
