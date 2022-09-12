import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user-controller';

const usersRouter = Router();

usersRouter.post(
  '/',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  userController.create
);
usersRouter.post('/sign', userController.signIn);
usersRouter.get('/', userController.getAll);
usersRouter.delete('/', userController.deleteById);

export default usersRouter;
