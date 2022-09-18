import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import { UserAttributes, UserInput, UserOuput } from '../../types/user-type';
import { Role } from '../../utils/const';

interface IUser extends Model<UserAttributes, UserInput>, UserOuput {}

const User = sequelize.define<IUser>('User', {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
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
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.ENUM(Role.User, Role.Admin),
    defaultValue: Role.User,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
