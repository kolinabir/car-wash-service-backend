import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { BookingService } from './booking.service';

const bookAService = catchAsync(async (req, res) => {
  const result = await BookingService.bookAServiceToDB(
    req.body,
    req.user.email,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service Booked successfully',
    data: result,
  });
});

export const BookingController = {
  bookAService,
};
