import { Optional } from 'sequelize';
import { Role } from '../utils/const';

type UserAttributes = {
  uuid: string;
  email: string;
  password: string;
  id?: number;
  role?: Role.Admin | Role.User | Role.SuperAdmin;
  isActivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserInput = Optional<UserAttributes, 'uuid'>;

type UserOuput = Required<UserAttributes>;

type UsersOuput = Pick<UserAttributes, 'uuid' | 'email'>[];

type UserCreate = {
  candidate: UserOuput;
  accessToken: string;
  refreshToken: string;
};

type UserUpdate = {
  isActivated: boolean;
  uuid: string;
};

export type {
  UserAttributes,
  UserInput,
  UserOuput,
  UsersOuput,
  UserCreate,
  UserUpdate,
};
