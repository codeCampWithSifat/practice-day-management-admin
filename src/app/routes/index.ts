import express from 'express';
import { ManagementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/management-departments',
    route: ManagementDepartmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
