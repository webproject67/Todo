import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';
import { UserAttributes, UsersOuput } from '../../types/user-type';

const getCandidate = (state: State): UserAttributes =>
  state[NameSpace.UserData].user;

const getCandidates = (state: State): UsersOuput =>
  state[NameSpace.UserData].users;

const getSelectUser = (state: State): string =>
  state[NameSpace.UserData].selectUser;

const getLoading = (state: State): boolean =>
  state[NameSpace.UserData].isLoaded;

const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.UserData].authorization;

const getCountRequests = (state: State): number =>
  state[NameSpace.UserData].countRequests;

export {
  getCandidate,
  getCandidates,
  getSelectUser,
  getLoading,
  getAuthorizationStatus,
  getCountRequests,
};
