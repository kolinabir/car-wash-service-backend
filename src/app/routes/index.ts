import { Router } from 'express';
import { AuthRoute } from '../Modules/Auth/auth.routes';
import { serviceRoutes } from '../Modules/Service/service.routes';
import { slotRoutes } from '../Modules/Slot/slot.routes';
import {
  bookingRoutes,
  bookingRoutes2,
} from '../Modules/Booking/booking.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/auth',
    router: AuthRoute,
  },
  {
    path: '/services',
    router: serviceRoutes,
  },
  {
    path: '/slots',
    router: slotRoutes,
  },
  {
    path: '/bookings',
    router: bookingRoutes,
  },
  {
    path: '/my-bookings',
    router: bookingRoutes2,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
