import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { ServiceService } from './service.service';

const createService = catchAsync(async (req, res) => {
  const result = await ServiceService.createServiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getAllServicesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All services fetched successfully',
    data: result,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const result = await ServiceService.getServiceByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service fetched successfully',
    data: result,
  });
});

const updateServiceById = catchAsync(async (req, res) => {
  const result = await ServiceService.updateServiceByIdInDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteServiceById = catchAsync(async (req, res) => {
  const result = await ServiceService.deleteServiceByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
};
