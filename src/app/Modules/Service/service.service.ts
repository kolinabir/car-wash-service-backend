import { TService } from './service.interface';
import { Service } from './service.model';

const createServiceIntoDB = async (service: TService) => {
  const result = await Service.create(service);
  return result;
};

const getAllServicesFromDB = async () => {
  const result = await Service.find({ isDeleted: false });
  return result;
};

const getServiceByIdFromDB = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};

const updateServiceByIdInDB = async (id: string, service: TService) => {
  const result = await Service.findByIdAndUpdate(id, service, { new: true });
  return result;
};

const deleteServiceByIdFromDB = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ServiceService = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getServiceByIdFromDB,
  updateServiceByIdInDB,
  deleteServiceByIdFromDB,
};
