import express from 'express';
import { UserController } from './users.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AdminValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdminZodValidation),
  UserController.createAdmin
);

export const UserRouter = router;
