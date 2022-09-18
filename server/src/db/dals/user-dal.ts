import UserModel from '../models/User-model';
import {
  UserInput,
  UserOuput,
  UserLinkActivate,
  UsersAndCountAll,
  UserUpdateActivate,
} from '../../types/user-type';

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

const getUserByUuid = async ({
  uuid,
}: UserLinkActivate): Promise<UserOuput | null> => {
  const candidate = await UserModel.findOne({ where: { uuid } });
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

const updateUserActivated = async ({
  isActivated,
  uuid,
}: UserUpdateActivate): Promise<boolean> => {
  const isUpdateActivated = await UserModel.update(
    { isActivated },
    { where: { uuid } }
  );
  return !!isUpdateActivated;
};

export {
  createUser,
  getUserByEmail,
  getUserByUuid,
  getUsersAll,
  deleteUser,
  updateUserActivated,
};
