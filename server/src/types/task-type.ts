import { Optional } from 'sequelize';

type TaskAttributes = {
  uuid: string;
  task: string;
  isClosed?: boolean;
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

type TaskUpdate = Required<Pick<TaskAttributes, 'isClosed' | 'uuid'>>;

export type {
  TaskAttributes,
  TaskInput,
  TaskOuput,
  TasksAndCountAll,
  TaskUpdate,
};
