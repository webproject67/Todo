import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import {
  TokenAttributes,
  TokenInput,
  TokenOuput,
} from '../../types/token-type';

interface IToken extends Model<TokenAttributes, TokenInput>, TokenOuput {}

const Token = sequelize.define<IToken>('Token', {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
});

export default Token;
