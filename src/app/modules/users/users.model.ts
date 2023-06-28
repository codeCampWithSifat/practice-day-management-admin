import { Schema, model } from 'mongoose';
import { bloodGroup, gender } from '../admin/admin.constant';
import { IUser, UserModel } from './users.interface';

export const UserSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNo: {
    type: String,
    required: true,
    unique: true,
  },
  emeygencyContactNo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: gender,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: bloodGroup,
  },
  designation: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
});

export const User = model<IUser, UserModel>('User', UserSchema);
