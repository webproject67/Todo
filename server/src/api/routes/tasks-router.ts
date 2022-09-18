import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from '../../middleware/auth-middleware';
import * as taskController from '../controllers/task-controller';

const tasksRouter = Router();

tasksRouter.post(
  '/',
  authMiddleware,
  body('task').trim().notEmpty(),
  taskController.createTask
);
tasksRouter.get('/', authMiddleware, taskController.getTasksAll);
tasksRouter.delete('/', authMiddleware, taskController.deleteTask);

export default tasksRouter;
