import { Optional } from 'sequelize';

type TaskAttributes = {
  id: number;
  task: string;
  createdAt?: Date;
  updatedAt?: Date;
  UserId?: number;
};

type TaskInput = Optional<TaskAttributes, 'id'>;

type TaskOuput = Required<TaskAttributes>;

type TasksAndCountAll = {
  rows: TaskOuput[];
  count: number;
};

export { TaskAttributes, TaskInput, TaskOuput, TasksAndCountAll };
