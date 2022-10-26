import { DataTypes, Model as Modelling } from 'sequelize';
import sequelize from '../config';
import { UserAttributes, UserInput, UserOuput } from '../../types/user-type';
import { Model, Role } from '../../utils/const';

interface IUserModel extends Modelling<UserAttributes, UserInput>, UserOuput {}

const UserModel = sequelize.define<IUserModel>(Model.User, {
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
  role: {
    type: DataTypes.STRING,
    defaultValue: Role.User,
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default UserModel;
