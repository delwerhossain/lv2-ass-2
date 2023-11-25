"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserSchema = exports.userSchema = exports.ordersSchema = exports.addressSchema = exports.nameSchema = void 0;
const zod_1 = require("zod");
// Define Zod schemas for nested structures
exports.nameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(25),
    lastName: zod_1.z.string().min(1).max(25),
});
exports.addressSchema = zod_1.z.object({
    street: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
});
exports.ordersSchema = zod_1.z.object({
    productName: zod_1.z.string().min(1),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
// Define the main Zod schema for the User
exports.userSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    username: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
    fullName: exports.nameSchema,
    age: zod_1.z.number(),
    email: zod_1.z.string().email(),
    isActive: zod_1.z.boolean().optional(),
    hobbies: zod_1.z.array(zod_1.z.string()).optional(),
    address: exports.addressSchema,
    orders: zod_1.z.array(exports.ordersSchema).optional(),
    isDelete: zod_1.z.boolean().optional(),
});
exports.validateUserSchema = exports.userSchema;
