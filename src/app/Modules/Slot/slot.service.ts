import { TSlot } from './slot.interface';
import { Slot } from './slot.model';

const createNewSlot = async (slot: TSlot) => {
  const { service, date, startTime, endTime } = slot;

  // Create slots
  const slots = [];
  let startHour = parseInt(startTime.split(':')[0]);
  const endHour = parseInt(endTime.split(':')[0]);

  while (startHour < endHour) {
    const slot = new Slot({
      service: service,
      date,
      startTime: `${startHour}:00`,
      endTime: `${startHour + 1}:00`,
      isBooked: 'available',
    });
    await slot.save();
    slots.push(slot);
    startHour++;
  }

  return slots;
};

const getAllSlotsFromDB = async (query: any) => {
  //   "date": "2024-06-18T00:00:00.000Z",
  const { date, serviceId } = query;
  if (date && serviceId) {
    const result = await Slot.find({
      date,
      service: serviceId,
      isBooked: 'available',
    });
    return result;
  }
  if (date) {
    const result = await Slot.find({ date, isBooked: 'available' });
    return result;
  }
  if (serviceId) {
    const result = await Slot.find({
      service: serviceId,
      isBooked: 'available',
    });
    return result;
  }

  const result = await Slot.find({ isBooked: 'available' });
  return result;
};

export const SlotService = {
  createNewSlot,
  getAllSlotsFromDB,
};
