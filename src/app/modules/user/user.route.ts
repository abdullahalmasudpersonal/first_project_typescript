import expres from 'express';
import { UserControllers } from './user.controller';

const router = expres.Router();

router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
