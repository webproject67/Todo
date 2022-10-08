import { DataTypes, Model as Modelling } from 'sequelize';
import sequelize from '../config';
import {
  TokenAttributes,
  TokenInput,
  TokenOuput,
} from '../../types/token-type';
import { Model } from '../../utils/const';

interface ITokenModel
  extends Modelling<TokenAttributes, TokenInput>,
    TokenOuput {}

const TokenModel = sequelize.define<ITokenModel>(Model.Token, {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
});

export default TokenModel;
