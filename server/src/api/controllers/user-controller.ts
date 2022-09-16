import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as userService from '../../db/services/user-service';
import * as tokenService from '../../db/services/token-service';
import { UserDto, TokenDto } from '../dtos';
import { TypeTextField } from '../../utils/const';
import createCookie from '../../utils/createCookie';

const signUp = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Email)
      throw createError(401, 'Введите корректный email');
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Password)
      throw createError(401, 'Пароль должен содержать не менее 6 символов');

    const payload: UserDto = req.body;
    const result = await userService.createUser(payload);

    createCookie(res, result);

    return res.json(result);
  }
);

const signIn = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload: UserDto = req.body;
    const result = await userService.getUserByEmail(payload, true);

    createCookie(res, result);

    return res.json(result);
  }
);

const signOut = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { refreshToken }: TokenDto = req.cookies;
    const result = await tokenService.deleteToken({ refreshToken });

    res.clearCookie('refreshToken');

    return res.json(result);
  }
);

const getUsersAll = async (req: Request, res: Response) => {
  const result = await userService.getUsersAll();
  return res.json(result);
};

const deleteUser = async (req: Request, res: Response) => {
  const payload: UserDto = req.body;
  const result = await userService.deleteUser(payload);
  return res.json(result);
};

export { signUp, signIn, signOut, getUsersAll, deleteUser };
