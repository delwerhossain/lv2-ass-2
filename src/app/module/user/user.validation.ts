import { z } from 'zod';


// Define Zod schemas for nested structures
export const nameSchema = z.object({
  firstName: z.string().min(1).max(25),
  lastName: z.string().min(1).max(25),
});

export const addressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

export const ordersSchema = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});

// Define the main Zod schema for the User
export const userSchema = z.object({
  userId: z.number(),
  username: z.string().min(1),
  password: z.string().min(1),
  fullName: nameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string()).optional(),
  address: addressSchema,
  orders: z.array(ordersSchema).optional(),
  isDelete: z.boolean().optional(),
});

export const validateUserSchema = userSchema;
