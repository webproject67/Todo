import User from './models/User';
import Task from './models/Task';
import sequelize from './config';

User.hasMany(Task);
Task.belongsTo(User);

const dbInit = () => sequelize.sync();

export default dbInit;
