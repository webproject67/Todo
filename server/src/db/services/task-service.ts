import * as taskDal from '../dal/task-dal';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';

const create = async (data: TaskInput): Promise<TaskOuput> =>
  taskDal.create(data);

const getAll = async (): Promise<TasksAndCountAll> => taskDal.getAll();

const deleteByUuid = async (uuid: string): Promise<boolean> =>
  taskDal.deleteByUuid(uuid);

export { create, getAll, deleteByUuid };
