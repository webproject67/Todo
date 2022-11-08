import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as userService from '../../db/services/user-service';
import * as tokenService from '../../db/services/token-service';
import { COOKIE_NAME, TypeTextField, DEVELOPMENT } from '../../utils/const';
import createCookie from '../../utils/create-cookie';
import sendMail from '../../mailer/nodemailer';
import { UserInput } from '../../types/user-type';

const signUp = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Email)
      throw createError(400, 'Введите корректный email');
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Password)
      throw createError(400, 'Пароль должен содержать не менее 6 символов');

    const payload: UserInput = req.body;
    const result = await userService.createUser(payload);

    createCookie(res, result);

    if (process.env.NODE_ENV !== DEVELOPMENT) {
      sendMail(
        result.candidate.email,
        `${process.env.URL_SERVER}/api/v1/users/activate/${result.candidate.uuid}`
      );
    }

    return res.json(result.accessToken);
  }
);

const signIn = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Email)
      throw createError(400, 'Введите корректный email');
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Password)
      throw createError(400, 'Пароль должен содержать не менее 6 символов');

    const payload: UserInput = req.body;
    const result = await userService.getUserByEmail(payload, true);

    createCookie(res, result);

    return res.json(result.accessToken);
  }
);

const signOut = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const token = req.cookies[COOKIE_NAME];
    await tokenService.deleteToken(token);

    res.clearCookie(COOKIE_NAME);

    return res.json();
  }
);

const checkAuth = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const token = req.cookies[COOKIE_NAME];
    const userData = await tokenService.getUserData(token);

    if (userData) {
      const result = await userService.getUserByEmail(userData, false);

      createCookie(res, result);

      return res.json(result.accessToken);
    }

    return res.json();
  }
);

const getUsersAll = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const result = await userService.getUsersAll();

    return res.json(result);
  }
);

const deleteUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload = String(req.query.uuid);
    await userService.deleteUser(payload);

    return res.json();
  }
);

const activateUser = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const uuid: string = req.params.id;
    await userService.updateUser({ isActivated: true, uuid });

    return res.redirect(String(process.env.URL_CLIENT));
  }
);

export {
  signUp,
  signIn,
  signOut,
  checkAuth,
  getUsersAll,
  deleteUser,
  activateUser,
};
