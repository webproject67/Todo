import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';

const checkIdMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userUuid = req.body.UserUuid || req.query.UserUuid;

    if (req.body.userData.uuid !== userUuid)
      throw createError(403, `Нет доступа`);

    next();
  }
);

export default checkIdMiddleware;
