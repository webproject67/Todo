import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from '../../middleware/auth-middleware';
import checkIdMiddleware from '../../middleware/check-id-middleware';
import checkIdAndRoleMiddleware from '../../middleware/check-id-and-role-middleware';
import { TypeTextField } from '../../utils/const';
import * as taskController from '../controllers/task-controller';

const tasksRouter = Router();

tasksRouter.post(
  '/',
  authMiddleware,
  checkIdMiddleware,
  body(TypeTextField.Text).trim().notEmpty(),
  taskController.createTask
);

tasksRouter.get(
  '/',
  authMiddleware,
  checkIdAndRoleMiddleware,
  taskController.getTasksAll
);

tasksRouter.delete(
  '/',
  authMiddleware,
  checkIdMiddleware,
  taskController.deleteTask
);

tasksRouter.put(
  '/',
  authMiddleware,
  checkIdMiddleware,
  taskController.updateTask
);

export default tasksRouter;
