import { Router } from 'express';
import usersRouter from './users-router';
import tasksRouter from './tasks-router';

const router = Router();

router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);

export default router;
