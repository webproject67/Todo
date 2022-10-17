import { Role } from '../utils/const';

type UserAttributes = {
  uuid?: string;
  email?: string;
  role?: Role;
  isActivated?: boolean;
  createdAt?: string;
  exp?: number;
  iat?: number;
};

type UserInput = {
  email: string;
  password: string;
};

type UserOuput = Required<UserAttributes>;

type UsersOuput = Required<Pick<UserAttributes, 'uuid' | 'email'>>[];

export type { UserAttributes, UserInput, UserOuput, UsersOuput };
