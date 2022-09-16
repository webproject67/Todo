import TokenModel from '../models/Token-model';
import { TokenInput, TokenOuput } from '../../types/token-type';

const createToken = async (payload: TokenInput): Promise<TokenOuput> => {
  const tokenData = await TokenModel.create(payload);
  return tokenData;
};

const getTokenByUser = async ({
  UserUuid,
}: TokenInput): Promise<TokenOuput | null> => {
  const tokenData = await TokenModel.findOne({ where: { UserUuid } });
  return tokenData;
};

const getTokenByRefreshToken = async ({
  refreshToken,
}: TokenInput): Promise<TokenOuput | null> => {
  const tokenData = await TokenModel.findOne({ where: { refreshToken } });
  return tokenData;
};

const updateToken = async ({
  UserUuid,
  refreshToken,
}: TokenInput): Promise<boolean> => {
  const isUpdateToken = await TokenModel.update(
    { refreshToken },
    { where: { UserUuid } }
  );
  return !!isUpdateToken;
};

const deleteToken = async ({ refreshToken }: TokenInput): Promise<boolean> => {
  const isDelToken = await TokenModel.destroy({ where: { refreshToken } });
  return !!isDelToken;
};

export {
  createToken,
  getTokenByUser,
  getTokenByRefreshToken,
  updateToken,
  deleteToken,
};
