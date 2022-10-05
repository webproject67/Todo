import TaskModel from '../models/Task-model';
import {
  TaskInput,
  TaskOuput,
  TasksAndCountAll,
  TaskUpdate,
} from '../../types/task-type';

const createTask = async (payload: TaskInput): Promise<TaskOuput> => {
  const task = await TaskModel.create(payload);
  return task;
};

const getTasksAll = async (UserUuid: string): Promise<TasksAndCountAll> => {
  const tasks = await TaskModel.findAndCountAll({ where: { UserUuid } });
  return tasks;
};

const deleteTask = async (uuid: string): Promise<boolean> => {
  const isDelTask = await TaskModel.destroy({ where: { uuid } });
  return !!isDelTask;
};

const updateTask = async ({ isClosed, uuid }: TaskUpdate): Promise<boolean> => {
  const isUpdateClosed = await TaskModel.update(
    { isClosed },
    { where: { uuid } }
  );
  return !!isUpdateClosed;
};

export { createTask, getTasksAll, deleteTask, updateTask };
