import TaskModel from '../models/Task-model';
import {
  TaskCreate,
  TasksAndCountAll,
  TaskUpdateClose,
  TaskUpdatePriority,
} from '../../types/task-type';

const createTask = async (payload: TaskCreate): Promise<void> => {
  await TaskModel.create(payload);
};

const getTasksAll = async (UserUuid: string): Promise<TasksAndCountAll> => {
  const tasks = await TaskModel.findAndCountAll({
    where: { UserUuid },
    order: ['isClosed', 'priority', ['updatedAt', 'DESC']],
  });
  return tasks;
};

const deleteTask = async (uuid: string): Promise<void> => {
  await TaskModel.destroy({ where: { uuid } });
};

const updateTaskClose = async ({
  isClosed,
  uuid,
}: TaskUpdateClose): Promise<void> => {
  await TaskModel.update({ isClosed }, { where: { uuid } });
};

const updateTaskPriority = async ({
  priority,
  uuid,
}: TaskUpdatePriority): Promise<void> => {
  await TaskModel.update({ priority }, { where: { uuid } });
};

export {
  createTask,
  getTasksAll,
  deleteTask,
  updateTaskClose,
  updateTaskPriority,
};
