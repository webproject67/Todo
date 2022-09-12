import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import { TaskInput, TaskOuput, TaskAttributes } from '../../types/task-type';

interface ITask extends Model<TaskAttributes, TaskInput>, TaskOuput {}

const Task = sequelize.define<ITask>('Task', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Task;
