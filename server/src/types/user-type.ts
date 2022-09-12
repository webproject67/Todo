import { Optional } from 'sequelize';
import { Role } from '../utils/const';

type UserAttributes = {
  id: number;
  email: string;
  password: string;
  role?: Role.Admin | Role.User;
  createdAt?: Date;
  updatedAt?: Date;
};

type UserInput = Optional<UserAttributes, 'id'>;

type UserOuput = Required<UserAttributes>;

type UserJwt = Optional<UserAttributes, 'password'>;

type UsersAndCountAll = {
  rows: UserOuput[];
  count: number;
};

export { UserAttributes, UserInput, UserOuput, UserJwt, UsersAndCountAll };
