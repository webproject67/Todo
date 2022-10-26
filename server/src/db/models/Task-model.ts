import { DataTypes, Model as Modelling } from 'sequelize';
import sequelize from '../config';
import { TaskAttributes, TaskInput, TaskOuput } from '../../types/task-type';
import { Model } from '../../utils/const';

interface ITaskModel extends Modelling<TaskAttributes, TaskInput>, TaskOuput {}

const TaskModel = sequelize.define<ITaskModel>(Model.Task, {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
  },
  isClosed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default TaskModel;
