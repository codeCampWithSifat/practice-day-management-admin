import express from 'express';
import { AdminController } from './admin.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation2 } from './admin.validation';

const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.patch(
  '/:id',
  validateRequest(AdminValidation2.updateAdminZodValidation),
  AdminController.updateAdmin
);

router.get('/', AdminController.getAllAdmins);

export const AdminRouter = router;
