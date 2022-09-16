import jwt from 'jsonwebtoken';
import { UserOuput } from '../types/user-type';

const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;

const verifyJwt = async (refreshToken: string): Promise<UserOuput> =>
  jwt.verify(refreshToken, jwtRefreshSecret) as UserOuput;

export default verifyJwt;
