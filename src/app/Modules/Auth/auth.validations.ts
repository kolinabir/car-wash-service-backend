import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8)
      .max(100),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
