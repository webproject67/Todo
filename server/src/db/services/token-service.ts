import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import * as tokenDal from '../dals/token-dal';
import { TokenInput, TokenOuput } from '../../types/token-type';
import { UserOuput } from '../../types/user-type';

const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;

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
  if (!payload.refreshToken)
    throw createError(401, `Пользователь не авторизован`);

  const userData = jwt.verify(
    payload.refreshToken,
    jwtRefreshSecret
  ) as UserOuput;
  const token = await tokenDal.getTokenByRefreshToken(payload);
  if (!userData || !token)
    throw createError(401, `Пользователь не авторизован`);

  return userData;
};

export { createToken, deleteToken, refresh };
