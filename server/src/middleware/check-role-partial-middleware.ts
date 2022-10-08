import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import { Role } from '../utils/const';

const checkRolePartialMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.userData.role === Role.User)
      throw createError(403, `Нет доступа`);

    next();
  }
);

export default checkRolePartialMiddleware;
