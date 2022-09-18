import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import { Role } from '../utils/const';

const checkRoleMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.userData.role !== Role.SuperAdmin)
      throw createError(403, `Нет доступа`);

    req.body.userData = {};
    next();
  }
);

export default checkRoleMiddleware;
