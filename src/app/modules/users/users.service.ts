import { IAdminUser } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';
import { generatedAdminId } from './user.utils';

const createAdmin = async (admin: IAdminUser): Promise<IAdminUser | null> => {
  const id = await generatedAdminId();
  admin.id = id;
  const result = await Admin.create(admin);
  return result;
};

export const UserService = {
  createAdmin,
};
