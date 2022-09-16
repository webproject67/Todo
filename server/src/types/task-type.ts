import { Optional } from 'sequelize';

type TaskAttributes = {
  uuid: string;
  task: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  UserUuid?: string;
};

type TaskInput = Optional<TaskAttributes, 'uuid'>;

type TaskOuput = Required<TaskAttributes>;

type TasksAndCountAll = {
  rows: TaskOuput[];
  count: number;
};

export { TaskAttributes, TaskInput, TaskOuput, TasksAndCountAll };
