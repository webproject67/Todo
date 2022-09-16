import { Router } from 'express';
import { body } from 'express-validator';
import * as taskController from '../controllers/task-controller';

const tasksRouter = Router();

tasksRouter.post(
  '/',
  body('task').trim().notEmpty(),
  taskController.createTask
);
tasksRouter.get('/', taskController.getTasksAll);
tasksRouter.delete('/', taskController.deleteTask);

export default tasksRouter;
