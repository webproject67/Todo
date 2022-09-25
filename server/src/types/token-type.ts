import { Optional } from 'sequelize';

type TokenAttributes = {
  uuid: string;
  refreshToken: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  UserUuid?: string;
};

type TokenInput = Optional<TokenAttributes, 'uuid'>;

type TokenOuput = Required<TokenAttributes>;

export type { TokenAttributes, TokenInput, TokenOuput };
