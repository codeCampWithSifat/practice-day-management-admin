import express from 'express';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';
import { UserRouter } from '../modules/users/users.route';
import { AdminRouter } from '../modules/admin/admin.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/admins',
    route: AdminRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
