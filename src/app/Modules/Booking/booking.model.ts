import { Schema, model } from 'mongoose';
import { TBBooking } from './booking.interface';

const bookingSchema = new Schema<TBBooking>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
      required: true,
    },
    vehicleType: {
      type: String,
      enum: [
        'car',
        'truck',
        'SUV',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor',
      ],
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: Number,
      required: true,
    },
    registrationPlate: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export const Booking = model<TBBooking>('Booking', bookingSchema);
