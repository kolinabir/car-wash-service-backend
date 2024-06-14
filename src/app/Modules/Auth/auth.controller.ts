/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse, { sendResponeForLogin } from '../../utils/sendRespone';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  sendResponeForLogin(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: result.token,
    data: result.user,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;
  const result = await AuthServices.changePasswordToServer(
    req.user,
    passwordData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password changed successfully',
    data: result,
  });
});

const checkAuthentication = catchAsync(async (req, res) => {
  const result = await AuthServices.checkAuthentication(req.user);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is authenticated',
    data: req.user,
  });
});

export const AuthController = {
  loginUser,
  changePassword,
  checkAuthentication,
};
