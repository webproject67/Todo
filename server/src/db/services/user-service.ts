import bcrypt from 'bcrypt';
import * as userDal from '../dal/user-dal';
import { UserInput, UserOuput, UsersAndCountAll } from '../../types/user-type';

const create = async ({
  email,
  password,
  role,
}: UserInput): Promise<UserOuput> => {
  const hashPassword = await bcrypt.hash(password, 15);
  return userDal.create({ email, role, password: hashPassword });
};

const sign = async (data: UserInput): Promise<UserOuput | null> =>
  userDal.sign(data);

const getAll = async (): Promise<UsersAndCountAll> => userDal.getAll();

const deleteById = async (id: number): Promise<boolean> =>
  userDal.deleteById(id);

export { create, sign, getAll, deleteById };
