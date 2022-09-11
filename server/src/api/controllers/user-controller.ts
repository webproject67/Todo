import { Request, Response } from 'express';
import * as service from '../../db/services/user-service';
import { CreateUserDTO, SignInUserDTO } from '../dto/user-dto';
import Role from '../../utils/const';

const create = async (req: Request, res: Response) => {
  const { email, password, role = Role.User }: CreateUserDTO = req.body;
  const result = await service.create({ email, password, role });
  return res.json(result);
};

const signIn = async (req: Request, res: Response) => {
  const payload: SignInUserDTO = req.body;
  const result = await service.signIn(payload);
  return res.json(result);
};

const getAll = async (req: Request, res: Response) => {
  const result = await service.getAll();
  return res.json(result);
};

const deleteById = async (req: Request, res: Response) => {
  const id = Number(req.body.id);
  const result = await service.deleteById(id);
  return res.json(result);
};

export { create, signIn, getAll, deleteById };
