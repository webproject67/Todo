import { NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';

const getSelectEmail = (state: State): string =>
  state[NameSpace.UserProcess].email;

export default getSelectEmail;
