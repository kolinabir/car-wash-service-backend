import { Router } from 'express';
import { SlotController } from './slot.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

//get all slots
router.get('/availability', SlotController.getAllSlots);

export const slotRoutes = router;
