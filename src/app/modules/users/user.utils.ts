import { Admin } from '../admin/admin.model';

const findLastAdminId = async (): Promise<string | null> => {
  const adminFaculty = await Admin.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return adminFaculty?.id ? adminFaculty?.id.substring(2) : null;
};

export const generatedAdminId = async (): Promise<string> => {
  const currentId =
    (await findLastAdminId()) || (0).toString().padStart(5, '0');
  let incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  incrementId = `A-${incrementId}`;
  return incrementId;
};
