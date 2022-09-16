import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as service from '../../db/services/task-service';
import { TaskDto } from '../dtos';

const createTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw createError(400, 'Введите задачу');

    const payload: TaskDto = req.body;
    const result = await service.createTask(payload);

    return res.json(result);
  }
);

const getTasksAll = async (req: Request, res: Response) => {
  const payload: TaskDto = req.body;
  const result = await service.getTasksAll(payload);

  return res.json(result);
};

const deleteTask = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await service.deleteTask(payload);

  return res.json(result);
};

export { createTask, getTasksAll, deleteTask };
