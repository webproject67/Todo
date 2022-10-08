import TokenModel from '../models/Token-model';
import { TokenOuput, TokenCreate } from '../../types/token-type';

const createToken = async (payload: TokenCreate): Promise<TokenOuput> => {
  const token = await TokenModel.create(payload);
  return token;
};

const getTokenByUser = async (UserUuid: string): Promise<TokenOuput | null> => {
  const token = await TokenModel.findOne({ where: { UserUuid } });
  return token;
};

const getTokenByToken = async (token: string): Promise<TokenOuput | null> => {
  const getToken = await TokenModel.findOne({ where: { token } });
  return getToken;
};

const updateToken = async ({
  UserUuid,
  token,
}: TokenCreate): Promise<boolean> => {
  const isUpdateToken = await TokenModel.update(
    { token },
    { where: { UserUuid } }
  );
  return !!isUpdateToken;
};

const deleteToken = async (token: string): Promise<void> => {
  await TokenModel.destroy({ where: { token } });
};

export {
  createToken,
  getTokenByUser,
  getTokenByToken,
  updateToken,
  deleteToken,
};
