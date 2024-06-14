import { Schema } from 'mongoose';

export type TSlot = {
  service: Schema.Types.ObjectId;
  date: Date;
  startTime: String;
  endTime: String;
  isBooked: 'available' | 'booked' | 'cancelled';
};
