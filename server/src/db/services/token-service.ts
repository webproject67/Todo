import createError from 'http-errors';
import * as tokenDal from '../dals/token-dal';
import { TokenInput, TokenOuput } from '../../types/token-type';
import { UserOuput } from '../../types/user-type';
import verifyJwt from '../../utils/verify-jwt';

const createToken = async (
  payload: TokenInput
): Promise<TokenOuput | boolean> => {
  const tokenData = await tokenDal.getTokenByUser(payload);
  if (tokenData) return tokenDal.updateToken(payload);

  return tokenDal.createToken(payload);
};

const deleteToken = (payload: TokenInput): Promise<boolean> =>
  tokenDal.deleteToken(payload);

const refresh = async (payload: TokenInput): Promise<UserOuput> => {
  if (!payload.refreshToken) throw createError(401, `Не авторизован`);

  const userData = await verifyJwt(payload.refreshToken);
  const token = tokenDal.getTokenByRefreshToken(payload);
  if (!userData || !token) throw createError(401, `Не авторизован`);

  return userData;
};

export { createToken, deleteToken, refresh };
