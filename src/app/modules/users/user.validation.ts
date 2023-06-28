import { z } from 'zod';
import { bloodGroup, gender } from '../admin/admin.constant';

const createAdminZodValidation = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({ required_error: 'First Name is Required' }),
      middleName: z
        .string({ required_error: 'Middle Name is Required' })
        .optional(),
      lastName: z.string({ required_error: 'Last Name Is Required' }),
    }),
    dateOfBirth: z.string({ required_error: 'Date of Birth Is Required' }),
    gender: z.enum([...gender] as [string, ...string[]]),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
    email: z.string({ required_error: 'Email Is Required' }).email(),
    contactNo: z.string({ required_error: 'Contact No Is Required' }),
    emergencyContactNo: z.string({
      required_error: 'Emergency Contact No Is Required',
    }),
    presentAddress: z.string({ required_error: 'Present Address Is Required' }),
    permanentAddress: z.string({
      required_error: 'Permanent Address Is Required',
    }),
    designation: z.string({ required_error: 'Designation Is Required' }),
    profileImage: z.string({ required_error: 'Profile Image Is Required' }),
  }),
});

export const AdminValidation = {
  createAdminZodValidation,
};
