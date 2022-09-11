import * as taskDal from '../dal/task-dal';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';

const create = async (data: TaskInput): Promise<TaskOuput> =>
  taskDal.create(data);

const getAll = async (): Promise<TasksAndCountAll> => taskDal.getAll();

const deleteById = async (id: number): Promise<boolean> =>
  taskDal.deleteById(id);

export { create, getAll, deleteById };
