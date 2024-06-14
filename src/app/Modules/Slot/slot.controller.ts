import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';

const createSlot = catchAsync(async (req, res) => {
  const result = await '';
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});

export const SlotController = {
  createSlot,
};
