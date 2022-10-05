import store from '../store/index';
import { UsersAndCountAll, UserCreate } from './user-type';
import { TasksAndCountAll } from './task-type';

type UserProcess = {
  email: string;
};

type User = {
  user: UserCreate;
  users: UsersAndCountAll;
  isLoaded: boolean;
  isAuthorization: boolean;
};

type Task = {
  task: TasksAndCountAll;
  isLoaded: boolean;
  countUpdates: number;
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { UserProcess, User, Task, State, AppDispatch };
