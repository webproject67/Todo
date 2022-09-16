import UserModel from '../models/User-model';
import { UserInput, UserOuput, UsersAndCountAll } from '../../types/user-type';

const createUser = async (payload: UserInput): Promise<UserOuput> => {
  const candidate = await UserModel.create(payload);
  return candidate;
};

const getUserByEmail = async ({
  email,
}: UserInput): Promise<UserOuput | null> => {
  const candidate = await UserModel.findOne({ where: { email } });
  return candidate;
};

const getUsersAll = async (): Promise<UsersAndCountAll> => {
  const candidates = await UserModel.findAndCountAll();
  return candidates;
};

const deleteUser = async ({ email }: UserInput): Promise<boolean> => {
  const isDelUser = await UserModel.destroy({ where: { email } });
  return !!isDelUser;
};

export { createUser, getUserByEmail, getUsersAll, deleteUser };
