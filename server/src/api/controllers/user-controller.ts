import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as service from '../../db/services/user-service';
import { CreateUserDTO, SignInUserDTO } from '../dto/user-dto';
import { Role, TypeTextField } from '../../utils/const';

const create = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Email)
      throw createError(400, 'Введите корректный email');
    if (!errors.isEmpty() && errors.array()[0].param === TypeTextField.Password)
      throw createError(400, 'Пароль должен содержать не менее 6 символов');

    const { email, password, role = Role.User }: CreateUserDTO = req.body;
    const result = await service.create({ email, password, role });
    return res.json(result);
  }
);

const signIn = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload: SignInUserDTO = req.body;
    const result = await service.signIn(payload);
    return res.json(result);
  }
);

const getAll = async (req: Request, res: Response) => {
  const result = await service.getAll();
  return res.json(result);
};

const deleteByUuid = async (req: Request, res: Response) => {
  const { uuid } = req.body;
  const result = await service.deleteByUuid(uuid);
  return res.json(result);
};

export { create, signIn, getAll, deleteByUuid };
