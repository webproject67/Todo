import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from '../../components/task-list';
import priorities from '../../utils/select';
import { AppRoute, NameTextField } from '../../utils/const';
import { UserOuput } from '../../types/user-type';
import { TaskOuput } from '../../types/task-type';
import { OnChangeType } from '../../types/event-type';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCandidate, getSelectUser } from '../../store/user-data/selectors';
import { resetTasksAll } from '../../store/task-data/task-data';
import {
  getTasks,
  getCountTasks,
  getCountRequests,
} from '../../store/task-data/selectors';
import {
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
} from '../../store/api-actions';

interface ICallbacks {
  onChange: OnChangeType;
  onClickClose: (task: TaskOuput) => void;
  onClickDelete: (task: TaskOuput) => void;
}

function TaskListContainer(): JSX.Element {
  const location = useLocation();
  const isRoot = location.pathname === AppRoute.Root;
  const { uuid } = useAppSelector(getCandidate) as UserOuput;
  const selectUser = useAppSelector(getSelectUser);
  const tasks = useAppSelector(getTasks);
  const countTasks = useAppSelector(getCountTasks);
  const countRequests = useAppSelector(getCountRequests);
  const dispatch = useAppDispatch();

  const callbacks: ICallbacks = {
    onChange: useCallback(
      (value, name, id) => {
        dispatch(
          updateTaskAction({
            UserUuid: uuid,
            uuid: String(id),
            priority: Number(value),
          })
        );
      },
      [dispatch, uuid]
    ),
    onClickClose: useCallback(
      (task) => {
        dispatch(
          updateTaskAction({
            UserUuid: uuid,
            uuid: task.uuid,
            isClosed: !task.isClosed,
          })
        );
      },
      [dispatch, uuid]
    ),
    onClickDelete: useCallback(
      (task) => {
        dispatch(deleteTaskAction({ UserUuid: uuid, uuid: task.uuid }));
      },
      [dispatch, uuid]
    ),
  };

  useEffect(() => {
    if (isRoot && uuid) dispatch(getTasksAllAction(uuid));
    if (!isRoot && selectUser) dispatch(getTasksAllAction(selectUser));

    return () => {
      dispatch(resetTasksAll());
    };
  }, [dispatch, uuid, countRequests, isRoot, selectUser]);

  return (
    <TaskList
      tasks={tasks}
      countTasks={countTasks}
      name={NameTextField.Priority}
      priorities={priorities}
      id={NameTextField.Priority}
      label="Приоритет"
      onChange={callbacks.onChange}
      onClickClose={callbacks.onClickClose}
      onClickDelete={callbacks.onClickDelete}
    />
  );
}

export default React.memo(TaskListContainer);
