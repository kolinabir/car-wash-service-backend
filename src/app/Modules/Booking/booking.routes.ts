import { Router } from 'express';
import { BookingController } from './booking.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post('/', auth(USER_ROLE.user), BookingController.bookAService);

export const bookingRoutes = router;
