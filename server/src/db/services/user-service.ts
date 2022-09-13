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
  const candidate = await userDal.signIn({ email, password });
  if (candidate)
    throw createError(401, `Пользователь с таким ${email} уже существует`);

  const hashPassword = await bcrypt.hash(password, 15);
  const result = await userDal.create({ email, role, password: hashPassword });
  return generateJwt({
    uuid: result.uuid,
    email: result.email,
    role: result.role,
  });
};

const signIn = async ({ email, password }: UserInput): Promise<string> => {
  const candidate = await userDal.signIn({ email, password });
  if (!candidate)
    throw createError(401, `Пользователь с таким ${email} не найден`);

  const comparePassword = bcrypt.compareSync(password, candidate.password);
  if (!comparePassword) throw createError(401, `Неверный пароль`);
  return generateJwt({
    uuid: candidate.uuid,
    email: candidate.email,
    role: candidate.role,
  });
};

const getAll = async (): Promise<UsersAndCountAll> => userDal.getAll();

const deleteByUuid = async (uuid: string): Promise<boolean> =>
  userDal.deleteByUuid(uuid);

export { create, signIn, getAll, deleteByUuid };
