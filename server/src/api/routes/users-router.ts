import { Router } from 'express';
import { body } from 'express-validator';
import authMiddleware from '../../middleware/auth-middleware';
import checkRolePrivateMiddleware from '../../middleware/check-role-private-middleware';
import checkRolePartialMiddleware from '../../middleware/check-role-partial-middleware';
import { TypeTextField } from '../../utils/const';
import * as userController from '../controllers/user-controller';

const usersRouter = Router();

usersRouter.post(
  '/',
  body(TypeTextField.Email).trim().normalizeEmail().isEmail(),
  body(TypeTextField.Password).trim().isLength({ min: 6 }),
  userController.signUp
);

usersRouter.post(
  '/sign',
  body(TypeTextField.Email).trim().normalizeEmail().isEmail(),
  body(TypeTextField.Password).trim().isLength({ min: 6 }),
  userController.signIn
);

usersRouter.delete('/sign', userController.signOut);

usersRouter.get('/checkAuth', userController.checkAuth);

usersRouter.get(
  '/',
  authMiddleware,
  checkRolePartialMiddleware,
  userController.getUsersAll
);

usersRouter.delete(
  '/',
  authMiddleware,
  checkRolePrivateMiddleware,
  userController.deleteUser
);

usersRouter.get('/activate/:id', userController.activateUser);

export default usersRouter;
