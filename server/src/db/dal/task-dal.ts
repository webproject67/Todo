import TaskModel from '../models/Task-model';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';

const create = async (data: TaskInput): Promise<TaskOuput> => {
  const newTask = await TaskModel.create(data);
  return newTask;
};

const getAll = async (): Promise<TasksAndCountAll> => {
  const tasks = await TaskModel.findAndCountAll();
  return tasks;
};

const deleteByUuid = async (uuid: string): Promise<boolean> => {
  const deletedTask = await TaskModel.destroy({ where: { uuid } });
  return !!deletedTask;
};

export { create, getAll, deleteByUuid };
