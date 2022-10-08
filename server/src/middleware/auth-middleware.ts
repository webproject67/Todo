import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import { TypeToken } from '../utils/const';
import { jwtVerify } from '../utils/generate-jwt';

const authMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) throw createError(401, `Не авторизован`);

    const token = authorizationHeader.split(' ')[1];
    if (!token) throw createError(401, `Не авторизован`);

    const userData = jwtVerify(token, TypeToken.Access);

    if (!userData) throw createError(401, `Не авторизован`);

    req.body.userData = userData;

    next();
  }
);

export default authMiddleware;
