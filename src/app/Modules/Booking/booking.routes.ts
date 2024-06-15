import { Router } from 'express';
import { BookingController } from './booking.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();
const router2 = Router();

router2.get('/', auth(USER_ROLE.user), BookingController.getBookingByMail);
router.get('/', auth(USER_ROLE.admin), BookingController.getAllBookings);
router.post('/', auth(USER_ROLE.user), BookingController.bookAService);

export const bookingRoutes = router;

export const bookingRoutes2 = router2;
