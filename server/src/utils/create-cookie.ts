import { Response } from 'express';
import * as tokenService from '../db/services/token-service';
import { UserCreate } from '../types/user-type';

const createCookie = async (
  res: Response,
  result: UserCreate
): Promise<void> => {
  res.cookie('todo-token', result.token.refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  await tokenService.createToken({
    UserUuid: result.candidate.uuid,
    refreshToken: result.token.refreshToken,
  });
};

export default createCookie;
