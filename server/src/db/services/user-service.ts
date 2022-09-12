import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import * as userDal from '../dal/user-dal';
import { UserInput, UsersAndCountAll, UserJwt } from '../../types/user-type';

const jwtKey = process.env.JWT_KEY as string;

const generateJwt = (data: UserJwt): string =>
  jwt.sign(data, jwtKey, { expiresIn: '24h' });

const create = async ({
  email,
  password,
  role,
}: UserInput): Promise<string> => {
  const hashPassword = await bcrypt.hash(password, 15);
  const result = await userDal.create({ email, role, password: hashPassword });
  return generateJwt({ id: result.id, email: result.email, role: result.role });
};

const signIn = async (data: UserInput): Promise<string> => {
  const result = await userDal.signIn(data);
  const comparePassword = bcrypt.compareSync(data.password, result.password);
  if (!comparePassword) throw createError(401, `Неверный пароль`);
  return generateJwt({ id: result.id, email: result.email, role: result.role });
};

const getAll = async (): Promise<UsersAndCountAll> => userDal.getAll();

const deleteById = async (id: number): Promise<boolean> =>
  userDal.deleteById(id);

export { create, signIn, getAll, deleteById };
