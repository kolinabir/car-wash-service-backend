import { Router } from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post('/', auth(USER_ROLE.admin), ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getServiceById);
router.put('/:id', ServiceController.updateServiceById);
router.delete('/:id', ServiceController.deleteServiceById);

export const serviceRoutes = router;
