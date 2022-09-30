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

type UserInputSelect = Pick<UserAttributes, 'email'>;

type UserInput = Pick<UserAttributes, 'email' | 'password'>;

type UserOuput = Required<UserAttributes>;

type UserLinkActivate = Pick<UserAttributes, 'uuid'>;

type UserUpdateActivate = Pick<UserAttributes, 'uuid' | 'isActivated'>;

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

export type {
  UserAttributes,
  UserInputSelect,
  UserInput,
  UserOuput,
  UserLinkActivate,
  UserUpdateActivate,
  UsersAndCountAll,
  UserOuputJwt,
  UserCreate,
};
