import React, { useState } from 'react';
import TaskAdd from '../../components/task-add';
import { OnChangeType, OnSubmitType } from '../../types/event-type';

interface ICallbacks {
  onChange: OnChangeType;
  onSubmit: OnSubmitType;
}

function TaskAddContainer(): JSX.Element {
  const [data, setData] = useState({
    task: '',
  });

  const callbacks: ICallbacks = {
    onChange: (name, value) => {
      setData((prevData) => ({ ...prevData, [name]: value }));
    },
    onSubmit: (evt) => {
      evt.preventDefault();
    },
  };

  return <TaskAdd data={data} events={callbacks} />;
}

export default TaskAddContainer;
