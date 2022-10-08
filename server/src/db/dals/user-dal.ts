import UserModel from '../models/User-model';
import {
  UserInput,
  UserOuput,
  UsersOuput,
  UserUpdate,
} from '../../types/user-type';

const createUser = async (payload: UserInput): Promise<UserOuput> => {
  const candidate = await UserModel.create(payload);
  return candidate;
};

const getUserByEmail = async (email: string): Promise<UserOuput | null> => {
  const candidate = await UserModel.findOne({ where: { email } });
  return candidate;
};

const getUsersAll = async (): Promise<UsersOuput> => {
  const candidates = await UserModel.findAll({
    attributes: ['uuid', 'email'],
    order: ['email'],
  });
  return candidates;
};

const deleteUser = async (uuid: string): Promise<void> => {
  await UserModel.destroy({ where: { uuid } });
};

const updateUser = async ({ isActivated, uuid }: UserUpdate): Promise<void> => {
  await UserModel.update({ isActivated }, { where: { uuid } });
};

export { createUser, getUserByEmail, getUsersAll, deleteUser, updateUser };
