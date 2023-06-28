"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedAdminId = void 0;
const admin_model_1 = require("../admin/admin.model");
const findLastAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const adminFaculty = yield admin_model_1.Admin.findOne({}, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (adminFaculty === null || adminFaculty === void 0 ? void 0 : adminFaculty.id) ? adminFaculty === null || adminFaculty === void 0 ? void 0 : adminFaculty.id.substring(2) : null;
});
const generatedAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield findLastAdminId()) || (0).toString().padStart(5, '0');
    let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementId = `A-${incrementId}`;
    return incrementId;
});
exports.generatedAdminId = generatedAdminId;
