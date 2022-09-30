import { NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';
import { UserCreate } from '../../types/user-type';

const getUser = (state: State): UserCreate => state[NameSpace.UserData].user;

const getLoadedUserData = (state: State): boolean =>
  state[NameSpace.UserData].isLoaded;

export { getUser, getLoadedUserData };
