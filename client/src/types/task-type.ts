type TaskAttributes = {
  uuid: string;
  task: string;
  isClosed?: boolean;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  UserUuid?: string;
};

type TaskInput = Pick<TaskAttributes, 'task'>;

type TaskOuput = Required<TaskAttributes>;

type TasksAndCountAll = {
  rows: TaskOuput[];
  count: number;
};

type TasksAll = Pick<TasksAndCountAll, 'rows'>['rows'];

export type {
  TaskAttributes,
  TaskInput,
  TaskOuput,
  TasksAndCountAll,
  TasksAll,
};
