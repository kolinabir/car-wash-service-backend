/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role?: 'admin' | 'user';
}
export interface UserModel extends Model<TUser> {
  isUserExistsByUserName: (email: string) => Promise<TUser>;
  isPasswordMatch: (
    // eslint-disable-next-line no-unused-vars
    plainTextPassword: string,
    hashedPassword: string,
  ) => Promise<boolean>;
}

export type TUSER_ROLE = keyof typeof USER_ROLE;
