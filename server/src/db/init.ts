import { Sequelize } from 'sequelize';
import { UserModel, TaskModel, TokenModel } from './models';
import sequelize from './config';
import { DEVELOPMENT } from '../utils/const';

UserModel.hasMany(TaskModel);
TaskModel.belongsTo(UserModel);
UserModel.hasOne(TokenModel);
TokenModel.belongsTo(UserModel);

const dbInit = async (): Promise<Sequelize> => {
  const init = await sequelize.sync({
    alter: process.env.NODE_ENV === DEVELOPMENT,
  });
  return init;
};

export default dbInit;
