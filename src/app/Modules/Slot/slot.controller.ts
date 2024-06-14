import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { SlotService } from './slot.service';

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotService.createNewSlot(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAllSlots = catchAsync(async (req, res) => {
  const result = await SlotService.getAllSlotsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const SlotController = {
  createSlot,
  getAllSlots,
};
