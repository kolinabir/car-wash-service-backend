import { Router } from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { ServiceValidationSchema } from './service.validations';
import validateRequest from '../../middlewares/validateRequest';
import { SlotController } from '../Slot/slot.controller';

const router = Router();


router.post('/slots', auth(USER_ROLE.admin), SlotController.createSlot);
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidationSchema.createServiceValidationSchema),
  ServiceController.createService,
);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getServiceById);
router.put('/:id', auth(USER_ROLE.admin), ServiceController.updateServiceById);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  ServiceController.deleteServiceById,
);

export const serviceRoutes = router;
