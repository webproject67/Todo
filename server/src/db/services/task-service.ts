import * as taskDal from '../dals/task-dal';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';
import { TokenInput } from '../../types/token-type';
import checkUser from '../../utils/check-user';

const createTask = async (
  refreshToken: TokenInput,
  payload: TaskInput
): Promise<TaskOuput> => {
  await checkUser(refreshToken, payload);

  return taskDal.createTask(payload);
};

const getTasksAll = async (
  refreshToken: TokenInput,
  payload: TaskInput
): Promise<TasksAndCountAll> => {
  await checkUser(refreshToken, payload);

  return taskDal.getTasksAll(payload);
};

const deleteTask = async (
  refreshToken: TokenInput,
  payload: TaskInput
): Promise<boolean> => {
  await checkUser(refreshToken, payload);

  return taskDal.deleteTask(payload);
};

export { createTask, getTasksAll, deleteTask };
