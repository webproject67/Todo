import createError from 'http-errors';
import { TaskInput } from '../types/task-type';
import { TokenInput } from '../types/token-type';
import verifyJwt from './verify-jwt';

const checkUser = async (
  { refreshToken }: TokenInput,
  payload: TaskInput
): Promise<void> => {
  const userData = await verifyJwt(refreshToken);
  if (userData.uuid !== payload.UserUuid) throw createError(403, `Нет доступа`);
};

export default checkUser;
