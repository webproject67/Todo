import React, { useState } from 'react';
import TaskAdd from '../../components/task-add';
import { OnChangeType, OnSubmitType } from '../../types/event-type';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCandidate } from '../../store/user-data/selectors';
import { createTaskAction } from '../../store/api-actions';

interface ICallbacks {
  onChange: OnChangeType;
  onSubmit: OnSubmitType;
}

function TaskAddContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const candidate = useAppSelector(getCandidate);

  const [data, setData] = useState({
    task: '',
  });

  const callbacks: ICallbacks = {
    onChange: (value, name) => {
      setData((prevData) => ({ ...prevData, [name]: value }));
    },
    onSubmit: (evt) => {
      evt.preventDefault();
      dispatch(createTaskAction({ UserUuid: candidate.uuid, task: data.task }));
    },
  };

  return <TaskAdd data={data} events={callbacks} />;
}

export default TaskAddContainer;
