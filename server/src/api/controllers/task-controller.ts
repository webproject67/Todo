import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as service from '../../db/services/task-service';
import CreateTaskDTO from '../dto/task-dto';

const create = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw createError(400, 'Введите задачу');

    const payload: CreateTaskDTO = req.body;
    const result = await service.create(payload);
    return res.json(result);
  }
);

const getAll = async (req: Request, res: Response) => {
  const result = await service.getAll();
  return res.json(result);
};

const deleteByUuid = async (req: Request, res: Response) => {
  const { uuid } = req.body;
  const result = await service.deleteByUuid(uuid);
  return res.json(result);
};

export { create, getAll, deleteByUuid };
