import { Router } from 'express';
import * as userController from '../controllers/user-controller';

const usersRouter = Router();

usersRouter.post('/', userController.create);
usersRouter.post('/sign', userController.signIn);
usersRouter.get('/', userController.getAll);
usersRouter.delete('/', userController.deleteById);

export default usersRouter;
