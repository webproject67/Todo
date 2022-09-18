import jwt from 'jsonwebtoken';
import { UserOuput } from '../types/user-type';
import { TypeToken } from './const';

const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET as string;

const verifyJwt = async (
  token: string,
  typeToken: TypeToken.Refresh | TypeToken.Access
): Promise<UserOuput> =>
  jwt.verify(
    token,
    typeToken === TypeToken.Refresh ? jwtRefreshSecret : jwtAccessSecret
  ) as UserOuput;

export default verifyJwt;
