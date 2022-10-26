import { Response } from 'express';
import * as tokenService from '../db/services/token-service';
import { UserCreate } from '../types/user-type';
import { COOKIE_NAME } from './const';

const createCookie = async (
  res: Response,
  result: UserCreate
): Promise<void> => {
  res.cookie(COOKIE_NAME, result.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    domain: '.vercel.app',
    sameSite: 'none',
    secure: true,
  });

  console.log(COOKIE_NAME);
  console.log(result.refreshToken);

  await tokenService.createToken({
    UserUuid: result.candidate.uuid,
    token: result.refreshToken,
  });
};

export default createCookie;
