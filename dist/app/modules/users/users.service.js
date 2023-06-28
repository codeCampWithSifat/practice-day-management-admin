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
exports.UserService = void 0;
const admin_model_1 = require("../admin/admin.model");
const user_utils_1 = require("./user.utils");
const createAdmin = (admin) => __awaiter(void 0, void 0, void 0, function* () {
    const id = yield (0, user_utils_1.generatedAdminId)();
    admin.id = id;
    const result = yield admin_model_1.Admin.create(admin);
    return result;
});
exports.UserService = {
    createAdmin,
};
