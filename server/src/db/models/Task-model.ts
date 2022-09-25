import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import { TaskAttributes, TaskInput, TaskOuput } from '../../types/task-type';

interface ITask extends Model<TaskAttributes, TaskInput>, TaskOuput {}

const Task = sequelize.define<ITask>('Task', {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isClosed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
});

export default Task;
