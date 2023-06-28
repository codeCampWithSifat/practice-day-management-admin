"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation2 = void 0;
const zod_1 = require("zod");
const admin_constant_1 = require("../admin/admin.constant");
const updateAdminZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .object({
            firstName: zod_1.z.string().optional(),
            middleName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        })
            .optional(),
        dateOfBirth: zod_1.z.string().optional(),
        gender: zod_1.z.enum([...admin_constant_1.gender]).optional(),
        bloodGroup: zod_1.z.enum([...admin_constant_1.bloodGroup]).optional(),
        email: zod_1.z.string().email().optional(),
        contactNo: zod_1.z.string().optional(),
        emergencyContactNo: zod_1.z.string().optional(),
        presentAddress: zod_1.z.string().optional(),
        permanentAddress: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        profileImage: zod_1.z.string().optional(),
    }),
});
exports.AdminValidation2 = {
    updateAdminZodValidation,
};
