import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Что-то пошло не так';

  res.status(status).json({ status, message });
};

export default errorMiddleware;
