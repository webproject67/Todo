import createError from 'http-errors';
import { TokenInput } from '../types/token-type';
import { Role } from './const';
import verifyJwt from './verify-jwt';

const checkUser = async ({ refreshToken }: TokenInput): Promise<void> => {
  const userData = await verifyJwt(refreshToken);
  if (userData.role !== Role.Admin) throw createError(403, `Нет доступа`);
};

export default checkUser;
