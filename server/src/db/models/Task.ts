import { DataTypes } from 'sequelize';
import sequelize from '../config';

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Task;
