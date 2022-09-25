import React from 'react';
import TaskList from '../../components/task-list';

function TaskListContainer(): JSX.Element {
  const onClick = () => null;

  return <TaskList onClick={onClick} />;
}

export default TaskListContainer;
