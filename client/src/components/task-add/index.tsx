import React from 'react';
import { cn as bem } from '@bem-react/classname';
import TextField from '../text-field';
import Button from '../button';
import { NameTextField, TypeButton, VariantButton } from '../../utils/const';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import './style.scss';

interface ITaskAdd {
  text: string;
  events: {
    onChange: OnChangeType;
    onSubmit: OnSubmitType;
  };
}

function TaskAdd({ text, events }: ITaskAdd): JSX.Element {
  const cn = bem('TaskAdd');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Добавить задачу:</h2>
      <form className={cn('form')} onSubmit={events.onSubmit}>
        <TextField
          label="Введите задачу"
          name={NameTextField.Task}
          value={text}
          onChange={events.onChange}
        />
        <div className={cn('btn')}>
          <Button type={TypeButton.Submit} variant={VariantButton.Contained}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(TaskAdd);
