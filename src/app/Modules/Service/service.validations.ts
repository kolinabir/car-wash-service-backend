import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    price: z.number().min(1),
    duration: z.number().min(1),
  }),
});

export const ServiceValidationSchema = { createServiceValidationSchema };
