import store from '../store/index';
import { UserCreate } from './user-type';

type User = {
  user: UserCreate;
  isLoaded: boolean;
  isAuthorization: boolean;
};

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { User, State, AppDispatch };
