import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { AdminService } from './admin.service';
import { IAdminUser } from './admin.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constant/pagination';
import { adminFilterableFields } from './admin.constant';

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AdminService.getSingleAdmin(id);

  sendResponse<IAdminUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get A Single Admin Successfully',
    data: result,
  });
});

const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await AdminService.updateAdmin(id, updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update Admin Successfully',
    data: result,
  });
});

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);
  const filters = pick(req.query, adminFilterableFields);
  const result = await AdminService.getAllAdmins(filters, paginationOptions);

  sendResponse<IAdminUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All The Admins',
    meta: result.meta,
    data: result.data,
  });
});

export const AdminController = {
  getSingleAdmin,
  updateAdmin,
  getAllAdmins,
};
