import { Router } from 'express';
import { body } from 'express-validator';
import * as taskController from '../controllers/task-controller';

const tasksRouter = Router();

tasksRouter.post('/', body('task').notEmpty(), taskController.create);
tasksRouter.get('/', taskController.getAll);
tasksRouter.delete('/', taskController.deleteById);

export default tasksRouter;
