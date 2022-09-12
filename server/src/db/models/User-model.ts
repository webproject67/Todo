import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import { UserInput, UserOuput, UserAttributes } from '../../types/user-type';

interface IUser extends Model<UserAttributes, UserInput>, UserOuput {}

const User = sequelize.define<IUser>('User', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
  },
});

export default User;
