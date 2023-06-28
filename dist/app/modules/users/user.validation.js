"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const admin_constant_1 = require("../admin/admin.constant");
const createAdminZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: 'First Name is Required' }),
            middleName: zod_1.z
                .string({ required_error: 'Middle Name is Required' })
                .optional(),
            lastName: zod_1.z.string({ required_error: 'Last Name Is Required' }),
        }),
        dateOfBirth: zod_1.z.string({ required_error: 'Date of Birth Is Required' }),
        gender: zod_1.z.enum([...admin_constant_1.gender]),
        bloodGroup: zod_1.z.enum([...admin_constant_1.bloodGroup]).optional(),
        email: zod_1.z.string({ required_error: 'Email Is Required' }).email(),
        contactNo: zod_1.z.string({ required_error: 'Contact No Is Required' }),
        emergencyContactNo: zod_1.z.string({
            required_error: 'Emergency Contact No Is Required',
        }),
        presentAddress: zod_1.z.string({ required_error: 'Present Address Is Required' }),
        permanentAddress: zod_1.z.string({
            required_error: 'Permanent Address Is Required',
        }),
        designation: zod_1.z.string({ required_error: 'Designation Is Required' }),
        profileImage: zod_1.z.string({ required_error: 'Profile Image Is Required' }),
    }),
});
exports.AdminValidation = {
    createAdminZodValidation,
};
