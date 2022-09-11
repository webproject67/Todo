import { Router } from 'express';
import * as taskController from '../controllers/task-controller';

const tasksRouter = Router();

tasksRouter.post('/', taskController.create);
tasksRouter.get('/', taskController.getAll);
tasksRouter.delete('/', taskController.deleteById);

export default tasksRouter;
