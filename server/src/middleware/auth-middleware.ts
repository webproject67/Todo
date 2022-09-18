import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import { TypeToken } from '../utils/const';
import verifyJwt from '../utils/verify-jwt';

const authMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) throw createError(401, `Не авторизован`);

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) throw createError(401, `Не авторизован`);

    const userData = await verifyJwt(accessToken, TypeToken.Access);
    if (!userData) throw createError(401, `Не авторизован`);

    req.body.userData = userData;
    next();
  }
);

export default authMiddleware;
