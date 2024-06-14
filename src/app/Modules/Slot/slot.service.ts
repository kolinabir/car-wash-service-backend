import { TSlot } from './slot.interface';
import { Slot } from './slot.model';

const createNewSlot = async (slot: TSlot) => {
  const { service, date, startTime, endTime } = slot;

  const startDateTime = new Date(`${date}T${startTime}:00`);
  const endDateTime = new Date(`${date}T${endTime}:00`);

  const slots = [];
  let currentTime = startDateTime;

  while (currentTime < endDateTime) {
    const endTime = new Date(currentTime);
    endTime.setHours(endTime.getHours() + 1);

    const slot = new Slot({
      service,
      date,
      startTime: currentTime.toISOString().substr(11, 5),
      endTime: endTime.toISOString().substr(11, 5),
    });

    slots.push(await slot.save());
    currentTime = endTime;
  }

  return slots;
};

export const SlotService = {
  createNewSlot,
};
