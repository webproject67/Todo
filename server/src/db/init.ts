import { Sequelize } from 'sequelize';
import { UserModel, TaskModel } from './models';
import sequelize from './config';

const isDev = process.env.NODE_ENV === 'development';

UserModel.hasMany(TaskModel);
TaskModel.belongsTo(UserModel);

const dbInit = async (): Promise<Sequelize> => {
  const init = await sequelize.sync({ alter: isDev });
  return init;
};

export default dbInit;
