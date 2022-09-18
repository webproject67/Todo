import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user-controller';

const usersRouter = Router();

usersRouter.post(
  '/',
  body('email').trim().normalizeEmail().isEmail(),
  body('password').trim().isLength({ min: 6 }),
  userController.signUp
);
usersRouter.post('/sign', userController.signIn);
usersRouter.delete('/sign', userController.signOut);
usersRouter.get('/', userController.getUsersAll);
usersRouter.delete('/', userController.deleteUser);
usersRouter.get('/activate/:id', userController.activateUser);

export default usersRouter;
