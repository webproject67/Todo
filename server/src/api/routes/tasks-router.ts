import { Router, Request, Response } from 'express';
import * as taskController from '../controllers/task/task-controller';
import CreateTaskDTO from '../../db/dto/task-dto';

const tasksRouter = Router();

tasksRouter.post('/', async (req: Request, res: Response) => {
  const payload: CreateTaskDTO = req.body;
  const result = await taskController.create(payload);
  return res.json(result);
});

tasksRouter.get('/', async (req: Request, res: Response) => {
  const result = await taskController.getAll();
  return res.json(result);
});

tasksRouter.delete('/', async (req: Request, res: Response) => {
  const id = Number(req.body.id);
  const result = await taskController.deleteById(id);
  return res.json(result);
});

export default tasksRouter;
