import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import * as userService from '../../db/services/user-service';
import * as tokenService from '../../db/services/token-service';
import { TokenDto } from '../dtos';
import createCookie from '../../utils/createCookie';

const refreshToken = asyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    const { refreshToken }: TokenDto = req.cookies;
    const userData = await tokenService.refresh({ refreshToken });
    const result = await userService.getUserByEmail(userData, false);

    createCookie(res, result);

    return res.json(result);
  }
);

export default refreshToken;
