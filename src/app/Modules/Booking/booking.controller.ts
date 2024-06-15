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
    message: 'Booking successful',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBookingsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const getBookingByMail = catchAsync(async (req, res) => {
  const result = await BookingService.getBookingByMailFromDB(req.user.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});

export const BookingController = {
  bookAService,
  getAllBookings,
  getBookingByMail,
};
