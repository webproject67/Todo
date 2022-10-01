import { NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';
import { UserOuput } from '../../types/user-type';

const getCandidate = (state: State): UserOuput =>
  state[NameSpace.UserData].user.candidate;

const getLoadedUserData = (state: State): boolean =>
  state[NameSpace.UserData].isLoaded;

const getAuthorization = (state: State): boolean =>
  state[NameSpace.UserData].isAuthorization;

export { getCandidate, getLoadedUserData, getAuthorization };
