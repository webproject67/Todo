import createError from 'http-errors';
import UserModel from '../models/User-model';
import { UserInput, UserOuput, UsersAndCountAll } from '../../types/user-type';

const create = async (data: UserInput): Promise<UserOuput> => {
  const newUser = await UserModel.create(data);
  return newUser;
};

const signIn = async ({ email }: UserInput): Promise<UserOuput> => {
  const user = await UserModel.findOne({ where: { email } });
  if (!user) throw createError(400, `Пользователь не найден`);
  return user;
};

const getAll = async (): Promise<UsersAndCountAll> => {
  const users = await UserModel.findAndCountAll();
  return users;
};

const deleteByUuid = async (uuid: string): Promise<boolean> => {
  const deletedUser = await UserModel.destroy({ where: { uuid } });
  return !!deletedUser;
};

export { create, signIn, getAll, deleteByUuid };
