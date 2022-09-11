import jwt from 'jsonwebtoken';
import * as service from '../../../db/services/user-service';
import { CreateUserDTO, SignUserDTO } from '../../dto/user-dto';
import mapper from './mapper';
import { UserJwt, UsersAndCountAll } from '../../../types/user-type';

const jwtKey = process.env.JWT_KEY as string;

const generateJwt = (data: UserJwt): string =>
  jwt.sign(data, jwtKey, { expiresIn: '24h' });

const create = async (data: CreateUserDTO): Promise<string> => {
  const newUser = mapper(await service.create(data));
  return generateJwt({
    id: newUser.id,
    email: newUser.email,
    role: newUser.role,
  });
};

const sign = async (data: SignUserDTO): Promise<string> => {
  const result = await service.sign(data);
  if (result) {
    const user = mapper(result);
    return generateJwt({ id: user.id, email: user.email, role: user.role });
  }
  return '';
};

const getAll = async (): Promise<UsersAndCountAll> => {
  const users = await service.getAll();
  return users;
};

const deleteById = async (id: number): Promise<boolean> => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};

export { create, sign, getAll, deleteById };
