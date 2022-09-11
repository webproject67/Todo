import { TaskOuput } from '../../../types/task-type';

const mapper = (task: TaskOuput): TaskOuput => ({
  id: task.id,
  task: task.task,
  createdAt: task.createdAt,
  updatedAt: task.updatedAt,
  UserId: task.UserId,
});

export default mapper;
