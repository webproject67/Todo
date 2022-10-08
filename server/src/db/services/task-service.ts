import * as taskDal from '../dals/task-dal';
import {
  TaskCreate,
  TasksAndCountAll,
  TaskUpdateClose,
  TaskUpdatePriority,
} from '../../types/task-type';

const createTask = (payload: TaskCreate): Promise<void> =>
  taskDal.createTask(payload);

const getTasksAll = (payload: string): Promise<TasksAndCountAll> =>
  taskDal.getTasksAll(payload);

const deleteTask = (payload: string): Promise<void> =>
  taskDal.deleteTask(payload);

const updateTaskClose = (payload: TaskUpdateClose): Promise<void> =>
  taskDal.updateTaskClose(payload);

const updateTaskPriority = (payload: TaskUpdatePriority): Promise<void> =>
  taskDal.updateTaskPriority(payload);

export {
  createTask,
  getTasksAll,
  deleteTask,
  updateTaskClose,
  updateTaskPriority,
};
