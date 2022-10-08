import { Optional } from 'sequelize';

type TaskAttributes = {
  uuid: string;
  text: string;
  id?: number;
  priority?: number;
  isClosed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  UserUuid?: string;
};

type TaskInput = Optional<TaskAttributes, 'uuid'>;

type TaskOuput = Required<TaskAttributes>;

type TaskCreate = {
  UserUuid: string;
  text: string;
};

type TasksAndCountAll = {
  rows: TaskOuput[];
  count: number;
};

type TaskUpdateClose = {
  isClosed: boolean;
  uuid: string;
};

type TaskUpdatePriority = {
  priority: number;
  uuid: string;
};

export type {
  TaskAttributes,
  TaskInput,
  TaskOuput,
  TaskCreate,
  TasksAndCountAll,
  TaskUpdateClose,
  TaskUpdatePriority,
};
