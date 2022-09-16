import { Router } from 'express';
import usersRouter from './users-router';
import tasksRouter from './tasks-router';
import tokensRouter from './tokens-router';

const router = Router();

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);
router.use('/tokens', tokensRouter);

export default router;
