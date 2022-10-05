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

const getTasksAll = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload = String(req.query.UserUuid);
    const result = await service.getTasksAll(payload);

    return res.json(result);
  }
);

const deleteTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload = String(req.query.uuid);
    const result = await service.deleteTask(payload);

    return res.json(result);
  }
);

const updateTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const isClosed = String(req.query.isClosed) === 'true';
    const uuid = String(req.query.uuid);
    const result = await service.updateTask({ isClosed, uuid });

    return res.json(result);
  }
);

export { createTask, getTasksAll, deleteTask, updateTask };
