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

const getAllSlotsFromDB = async () => {
  const result = await Slot.find({ isBooked: 'available' });
  return result;
};

export const SlotService = {
  createNewSlot,
  getAllSlotsFromDB,
};
