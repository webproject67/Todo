import { Optional } from 'sequelize';

type TokenAttributes = {
  uuid: string;
  token: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  UserUuid?: string;
};

type TokenInput = Optional<TokenAttributes, 'uuid'>;

type TokenOuput = Required<TokenAttributes>;

type TokenCreate = {
  UserUuid: string;
  token: string;
};

export type { TokenAttributes, TokenInput, TokenOuput, TokenCreate };
