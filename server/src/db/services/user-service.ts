import bcrypt from 'bcrypt';
import createError from 'http-errors';
import * as userDal from '../dals/user-dal';
import {
  UserInput,
  UsersOuput,
  UserCreate,
  UserUpdate,
} from '../../types/user-type';
import { TypeToken } from '../../utils/const';
import { jwtSign } from '../../utils/generate-jwt';

const createUser = async ({
  email,
  password,
}: UserInput): Promise<UserCreate> => {
  const findCandidate = await userDal.getUserByEmail(email);
  if (findCandidate) throw createError(401, `${email} уже существует`);

  const hashPassword = await bcrypt.hash(password, 15);
  const candidate = await userDal.createUser({ email, password: hashPassword });

  return {
    candidate,
    accessToken: jwtSign(candidate, TypeToken.Access),
    refreshToken: jwtSign(candidate, TypeToken.Refresh),
  };
};

const getUserByEmail = async (
  { email, password }: UserInput,
  checkPassword: boolean
): Promise<UserCreate> => {
  const candidate = await userDal.getUserByEmail(email);
  if (!candidate) throw createError(401, `${email} не найден`);

  if (checkPassword) {
    const comparePassword = bcrypt.compareSync(password, candidate.password);
    if (!comparePassword) throw createError(401, `Неверный пароль`);
  }

  return {
    candidate,
    accessToken: jwtSign(candidate, TypeToken.Access),
    refreshToken: jwtSign(candidate, TypeToken.Refresh),
  };
};

const getUsersAll = (): Promise<UsersOuput> => userDal.getUsersAll();

const deleteUser = (payload: string): Promise<void> =>
  userDal.deleteUser(payload);

const updateUser = (payload: UserUpdate): Promise<void> =>
  userDal.updateUser(payload);

export { createUser, getUserByEmail, getUsersAll, deleteUser, updateUser };
