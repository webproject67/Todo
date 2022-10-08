import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import { Role } from '../utils/const';

const checkIdAndRoleMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userUuid = req.body.UserUuid || req.query.UserUuid;
    const checkId = req.body.userData.uuid !== userUuid;
    const checkRole = req.body.userData.role === Role.User;

    if (checkRole && checkId) throw createError(403, `Нет доступа`);

    next();
  }
);

export default checkIdAndRoleMiddleware;
