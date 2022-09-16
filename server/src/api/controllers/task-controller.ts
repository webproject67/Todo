import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as service from '../../db/services/task-service';
import { TaskDto, TokenDto } from '../dtos';

const createTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw createError(400, 'Введите задачу');

    const payload: TaskDto = req.body;
    const { refreshToken }: TokenDto = req.cookies;
    const result = await service.createTask({ refreshToken }, payload);

    return res.json(result);
  }
);

const getTasksAll = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload: TaskDto = req.body;
    const { refreshToken }: TokenDto = req.cookies;
    const result = await service.getTasksAll({ refreshToken }, payload);

    return res.json(result);
  }
);

const deleteTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const payload = req.body;
    const { refreshToken }: TokenDto = req.cookies;
    const result = await service.deleteTask({ refreshToken }, payload);

    return res.json(result);
  }
);

export { createTask, getTasksAll, deleteTask };
