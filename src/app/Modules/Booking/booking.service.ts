import { Slot } from '../Slot/slot.model';
import { User } from '../User/user.model';
import { TBBooking } from './booking.interface';
import { Booking } from './booking.model';

const bookAServiceToDB = async (data: TBBooking, email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const result = await Booking.create({ ...data, customer: user._id });
  if (!result) {
    throw new Error('Service booking failed');
  }
  const slot = await Slot.findByIdAndUpdate(
    data.slot,
    { $set: { isBooked: 'booked' } },
    { new: true },
  );
  if (!slot) {
    throw new Error('Service booking failed');
  }

  const booking = await Booking.findById(result._id).populate(
    'service slot customer',
  );
  return booking;
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find().populate('service slot customer');
  return result;
};

const getBookingByMailFromDB = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const result = await Booking.find({ customer: user._id }).populate(
    'service slot customer',
  );
  return result;
};

export const BookingService = {
  bookAServiceToDB,
  getAllBookingsFromDB,
  getBookingByMailFromDB,
};
