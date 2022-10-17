import store from '../store/index';
import { UserAttributes, UsersOuput } from './user-type';
import { TasksOuput } from './task-type';
import { AuthorizationStatus } from '../utils/const';

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

type UserData = {
  user: UserAttributes;
  users: UsersOuput;
  selectUser: string;
  isLoaded: boolean;
  authorization: AuthorizationStatus;
  countRequests: number;
};

type TaskData = {
  tasks: TasksOuput;
  countTasks: number;
  isLoaded: boolean;
  countRequests: number;
};

export type { State, AppDispatch, UserData, TaskData };
