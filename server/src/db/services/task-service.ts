import * as taskDal from '../dals/task-dal';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';

const createTask = async (payload: TaskInput): Promise<TaskOuput> =>
  taskDal.createTask(payload);

const getTasksAll = async (payload: TaskInput): Promise<TasksAndCountAll> =>
  taskDal.getTasksAll(payload);

const deleteTask = async (payload: TaskInput): Promise<boolean> =>
  taskDal.deleteTask(payload);

export { createTask, getTasksAll, deleteTask };
