import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from '../../middleware/auth-middleware';
import checkRoleMiddleware from '../../middleware/check-role-middleware';
import * as userController from '../controllers/user-controller';

const usersRouter = Router();

usersRouter.post(
  '/',
  body('email').trim().normalizeEmail().isEmail(),
  body('password').trim().isLength({ min: 6 }),
  userController.signUp
);
usersRouter.post(
  '/sign',
  body('email').trim().normalizeEmail().isEmail(),
  body('password').trim().isLength({ min: 6 }),
  userController.signIn
);
usersRouter.delete('/sign', userController.signOut);
usersRouter.get(
  '/',
  authMiddleware,
  checkRoleMiddleware,
  userController.getUsersAll
);
usersRouter.delete(
  '/',
  authMiddleware,
  checkRoleMiddleware,
  userController.deleteUser
);
usersRouter.get('/activate/:id', userController.activateUser);

export default usersRouter;
