import { Schema } from 'mongoose';

export type TSlot = {
  // id
  service: Schema.Types.ObjectId;
  date: Date;
  startTime: TimeRanges;
  endTime: Date;
  isBooked: 'available' | 'booked' | 'cancelled';
};
