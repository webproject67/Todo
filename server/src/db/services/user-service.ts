import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import * as userDal from '../dals/user-dal';
import {
  UserInput,
  UserOuput,
  UserLinkActivate,
  UsersAndCountAll,
  UserOuputJwt,
  UserCreate,
  UserUpdateActivate,
} from '../../types/user-type';
import { TokenInput } from '../../types/token-type';
import checkRole from '../../utils/check-role';

const jwtAccessSecret = process.env.JWT_ACCESS_SECRET as string;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;

const generateJwt = ({ uuid, email, role }: UserOuput): UserOuputJwt => {
  const accessToken = jwt.sign({ uuid, email, role }, jwtAccessSecret, {
    expiresIn: '15m',
  });
  const refreshToken = jwt.sign({ uuid, email, role }, jwtRefreshSecret, {
    expiresIn: '30d',
  });
  return { accessToken, refreshToken };
};

const createUser = async ({
  email,
  password,
}: UserInput): Promise<UserCreate> => {
  const findCandidate = await userDal.getUserByEmail({ email, password });
  if (findCandidate) throw createError(401, `${email} уже существует`);

  const hashPassword = await bcrypt.hash(password, 15);
  const candidate = await userDal.createUser({ email, password: hashPassword });

  return {
    candidate,
    token: generateJwt(candidate),
  };
};

const getUserByEmail = async (
  { email, password }: UserInput,
  ceckPassword: boolean
): Promise<UserCreate> => {
  const candidate = await userDal.getUserByEmail({ email, password });
  if (!candidate) throw createError(401, `${email} не найден`);

  if (ceckPassword) {
    const comparePassword = bcrypt.compareSync(password, candidate.password);
    if (!comparePassword) throw createError(401, `Неверный пароль`);
  }

  return {
    candidate,
    token: generateJwt(candidate),
  };
};

const getUserByUuid = async (payload: UserLinkActivate): Promise<void> => {
  const candidate = await userDal.getUserByUuid(payload);
  if (!candidate) throw createError(401, `Неккоректная ссылка активации`);
};

const getUsersAll = async (
  refreshToken: TokenInput
): Promise<UsersAndCountAll> => {
  await checkRole(refreshToken);

  return userDal.getUsersAll();
};

const deleteUser = async (
  refreshToken: TokenInput,
  payload: UserInput
): Promise<boolean> => {
  await checkRole(refreshToken);

  return userDal.deleteUser(payload);
};

const updateUserActivated = async (
  payload: UserUpdateActivate
): Promise<boolean> => {
  const isUpdateActivated = await userDal.updateUserActivated(payload);
  return isUpdateActivated;
};

export {
  createUser,
  getUserByEmail,
  getUserByUuid,
  getUsersAll,
  deleteUser,
  updateUserActivated,
};
