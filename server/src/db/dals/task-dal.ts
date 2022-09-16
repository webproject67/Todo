import TaskModel from '../models/Task-model';
import { TaskInput, TaskOuput, TasksAndCountAll } from '../../types/task-type';

const createTask = async (payload: TaskInput): Promise<TaskOuput> => {
  const task = await TaskModel.create(payload);
  return task;
};

const getTasksAll = async ({
  UserUuid,
}: TaskInput): Promise<TasksAndCountAll> => {
  const tasks = await TaskModel.findAndCountAll({ where: { UserUuid } });
  return tasks;
};

const deleteTask = async ({ uuid }: TaskInput): Promise<boolean> => {
  const isDelTask = await TaskModel.destroy({ where: { uuid } });
  return !!isDelTask;
};

export { createTask, getTasksAll, deleteTask };
