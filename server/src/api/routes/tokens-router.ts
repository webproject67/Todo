import { Router } from 'express';
import refreshToken from '../controllers/token-controller';

const tokensRouter = Router();

tokensRouter.get('/', refreshToken);

export default tokensRouter;
