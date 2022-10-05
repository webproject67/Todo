import * as taskDal from '../dals/task-dal';
import {
  TaskInput,
  TaskOuput,
  TasksAndCountAll,
  TaskUpdate,
} from '../../types/task-type';

const createTask = async (payload: TaskInput): Promise<TaskOuput> =>
  taskDal.createTask(payload);

const getTasksAll = async (payload: string): Promise<TasksAndCountAll> =>
  taskDal.getTasksAll(payload);

const deleteTask = async (payload: string): Promise<boolean> =>
  taskDal.deleteTask(payload);

const updateTask = async (payload: TaskUpdate): Promise<boolean> =>
  taskDal.updateTask(payload);

export { createTask, getTasksAll, deleteTask, updateTask };
