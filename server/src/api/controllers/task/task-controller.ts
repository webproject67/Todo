import * as service from '../../../db/services/task-service';
import CreateTaskDTO from '../../dto/task-dto';
import mapper from './mapper';
import { TaskOuput, TasksAndCountAll } from '../../../types/task-type';

const create = async (data: CreateTaskDTO): Promise<TaskOuput> =>
  mapper(await service.create(data));

const getAll = async (): Promise<TasksAndCountAll> => {
  const tasks = await service.getAll();
  return tasks;
};

const deleteById = async (id: number): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};

export { create, getAll, deleteById };
