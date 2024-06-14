import { Router } from 'express';
import { AuthRoute } from '../Modules/Auth/auth.routes';
import { serviceRoutes } from '../Modules/Service/service.routes';

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
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
