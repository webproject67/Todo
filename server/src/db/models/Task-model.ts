import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import { TaskInput, TaskOuput, TaskAttributes } from '../../types/task-type';

interface ITask extends Model<TaskAttributes, TaskInput>, TaskOuput {}

const Task = sequelize.define<ITask>('Task', {
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
