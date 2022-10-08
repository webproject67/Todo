import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import createError from 'http-errors';
import asyncHandler from 'express-async-handler';
import * as service from '../../db/services/task-service';
import { TaskCreate } from '../../types/task-type';

const createTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw createError(400, 'Введите задачу');

    const payload: TaskCreate = req.body;
    await service.createTask(payload);

    return res.json();
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
    await service.deleteTask(payload);

    return res.json();
  }
);

const updateTask = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const isClosed = String(req.query.isClosed) === 'true';
    const priority = Number(req.query.priority);
    const uuid = String(req.query.uuid);

    if (priority) {
      await service.updateTaskPriority({ priority, uuid });
    } else {
      await service.updateTaskClose({ isClosed, uuid });
    }

    return res.json();
  }
);

export { createTask, getTasksAll, deleteTask, updateTask };
