import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type IUser = {
  id: string;
  name: UserName;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emeygencyContactNo: string;
  gender: 'Male' | 'Female';
  permanentAddress: string;
  presentAddress: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  designation: string;
  profileImage?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
