import { Types } from 'mongoose';

export type TBBooking = {
  customer?: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  // car, truck, SUV, van, motorcycle, bus, electricVehicle, hybridVehicle, bicycle, tractor
  vehicleType:
    | 'car'
    | 'truck'
    | 'SUV'
    | 'van'
    | 'motorcycle'
    | 'bus'
    | 'electricVehicle'
    | 'hybridVehicle'
    | 'bicycle'
    | 'tractor';
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
