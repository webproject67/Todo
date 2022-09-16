import { Optional } from 'sequelize';
import { Role } from '../utils/const';

type UserAttributes = {
  uuid: string;
  email: string;
  password: string;
  id?: number;
  role?: Role.Admin | Role.User;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserInput = Optional<UserAttributes, 'uuid'>;

type UserOuput = Required<UserAttributes>;

type UsersAndCountAll = {
  rows: UserOuput[];
  count: number;
};

type UserOuputJwt = {
  accessToken: string;
  refreshToken: string;
};

type UserCreate = {
  candidate: UserOuput;
  token: UserOuputJwt;
};

export {
  UserAttributes,
  UserInput,
  UserOuput,
  UsersAndCountAll,
  UserOuputJwt,
  UserCreate,
};
