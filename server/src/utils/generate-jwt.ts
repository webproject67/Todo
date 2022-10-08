import jwt from 'jsonwebtoken';
import { UserOuput } from '../types/user-type';
import { ExpiresToken, TypeToken } from './const';

type JwtSign = (
  { uuid, email, role, isActivated, createdAt }: UserOuput,
  typeToken: TypeToken.Access | TypeToken.Refresh
) => string;

type JwtVerify = (
  token: string,
  typeToken: TypeToken.Access | TypeToken.Refresh
) => null | UserOuput;

const jwtAccessSecret = process.env.JWT_ACCESS_SECRET as string;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;

const jwtSign: JwtSign = (
  { uuid, email, role, isActivated, createdAt },
  typeToken
) => {
  let expiresToken = ExpiresToken.Access;
  let jwtSecret = jwtAccessSecret;

  if (typeToken === TypeToken.Refresh) {
    expiresToken = ExpiresToken.Refresh;
    jwtSecret = jwtRefreshSecret;
  }

  const token = jwt.sign(
    { uuid, email, role, isActivated, createdAt },
    jwtSecret,
    {
      expiresIn: expiresToken,
    }
  );

  return token;
};

const jwtVerify: JwtVerify = (token, typeToken) => {
  let jwtSecret = jwtAccessSecret;

  if (typeToken === TypeToken.Refresh) jwtSecret = jwtRefreshSecret;

  let data = null;

  jwt.verify(token, jwtSecret, (error, decoded) => {
    data = decoded;
  });

  return data;
};

export { jwtSign, jwtVerify };
