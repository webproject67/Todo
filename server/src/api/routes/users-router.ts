import { Router, Request, Response } from 'express';
import * as userController from '../controllers/user/user-controller';
import Role from '../../utils/const';
import { CreateUserDTO, SignUserDTO } from '../dto/user-dto';

const usersRouter = Router();

usersRouter.post('/', async (req: Request, res: Response) => {
  const { email, password, role = Role.User }: CreateUserDTO = req.body;
  const result = await userController.create({ email, password, role });
  return res.json(result);
});

usersRouter.post('/sign', async (req: Request, res: Response) => {
  const payload: SignUserDTO = req.body;
  const result = await userController.sign(payload);
  return res.json(result);
});

usersRouter.get('/', async (req: Request, res: Response) => {
  const result = await userController.getAll();
  return res.json(result);
});

usersRouter.delete('/', async (req: Request, res: Response) => {
  const id = Number(req.body.id);
  const result = await userController.deleteById(id);
  return res.json(result);
});

export default usersRouter;
