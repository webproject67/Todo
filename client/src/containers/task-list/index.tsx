import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from '../../components/task-list';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCandidate } from '../../store/user-data/selectors';
import { getTasks, getCountUpdates } from '../../store/task-data/selectors';
import { resetTasksAll } from '../../store/task-data/task-data';
import getSelectEmail from '../../store/user-process/selectors';
import {
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
} from '../../store/api-actions';
import { TaskOuput } from '../../types/task-type';
import { AppRoute } from '../../utils/const';

function TaskListContainer(): JSX.Element {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const candidate = useAppSelector(getCandidate);
  const tasks = useAppSelector(getTasks);
  const countUpdates = useAppSelector(getCountUpdates);
  const email = useAppSelector(getSelectEmail);
  const isRoot = location.pathname === AppRoute.Root;

  const onClickDelete = (uuid: string) => {
    dispatch(deleteTaskAction({ uuid }));
  };

  const onClickClose = (elem: TaskOuput) => {
    dispatch(updateTaskAction({ uuid: elem.uuid, isClosed: !elem.isClosed }));
  };

  useEffect(() => {
    if (isRoot) dispatch(getTasksAllAction({ UserUuid: candidate.uuid }));
    if (!isRoot && email) dispatch(getTasksAllAction({ UserUuid: email }));
    return () => {
      dispatch(resetTasksAll());
    };
  }, [dispatch, candidate.uuid, countUpdates, isRoot, email]);

  return (
    <TaskList
      tasks={tasks}
      onClickDelete={onClickDelete}
      onClickClose={onClickClose}
    />
  );
}

export default TaskListContainer;
