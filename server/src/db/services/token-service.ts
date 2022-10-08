import createError from 'http-errors';
import * as tokenDal from '../dals/token-dal';
import { TokenOuput, TokenCreate } from '../../types/token-type';
import { UserOuput } from '../../types/user-type';
import { jwtVerify } from '../../utils/generate-jwt';
import { TypeToken } from '../../utils/const';

const createToken = async ({
  UserUuid,
  token,
}: TokenCreate): Promise<TokenOuput | boolean> => {
  const tokenData = await tokenDal.getTokenByUser(UserUuid);
  if (tokenData) return tokenDal.updateToken({ UserUuid, token });

  return tokenDal.createToken({ UserUuid, token });
};

const deleteToken = (payload: string): Promise<void> =>
  tokenDal.deleteToken(payload);

const getUserData = async (token: string): Promise<null | UserOuput> => {
  if (token) {
    const userData = jwtVerify(token, TypeToken.Refresh);
    const findToken = tokenDal.getTokenByToken(token);
    if (!userData || !findToken) throw createError(401, `Не авторизован`);

    return userData as UserOuput;
  }

  return null;
};

export { createToken, deleteToken, getUserData };
