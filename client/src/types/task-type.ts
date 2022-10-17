type TaskAttributes = {
  uuid?: string;
  text?: string;
  id?: number;
  priority?: number;
  isClosed?: boolean;
  createdAt?: string;
  updatedAt?: string;
  UserUuid?: string;
};

type TaskCreateInput = Required<Pick<TaskAttributes, 'UserUuid' | 'text'>>;

type TaskDeleteInput = Required<Pick<TaskAttributes, 'UserUuid' | 'uuid'>>;

type TaskUpdateInput = TaskDeleteInput &
  Pick<TaskAttributes, 'isClosed' | 'priority'>;

type TaskOuput = Required<TaskAttributes>;

type TasksOuput = TaskOuput[];

type TasksAndCountAll = {
  rows: TasksOuput;
  count: number;
};

export type {
  TaskCreateInput,
  TaskDeleteInput,
  TaskUpdateInput,
  TaskOuput,
  TasksOuput,
  TasksAndCountAll,
};
