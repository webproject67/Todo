import React, { useState } from 'react';
import TaskAdd from '../../components/task-add';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCandidate } from '../../store/user-data/selectors';
import { createTaskAction } from '../../store/api-actions';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import { UserOuput } from '../../types/user-type';

interface ICallbacks {
  onChange: OnChangeType;
  onSubmit: OnSubmitType;
}

function TaskAddContainer(): JSX.Element {
  const [text, setText] = useState('');
  const { uuid } = useAppSelector(getCandidate) as UserOuput;
  const dispatch = useAppDispatch();

  const callbacks: ICallbacks = {
    onChange: (value) => {
      setText(value);
    },
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(createTaskAction({ UserUuid: uuid, text }));
      setText('');
    },
  };

  return <TaskAdd text={text} events={callbacks} />;
}

export default TaskAddContainer;
