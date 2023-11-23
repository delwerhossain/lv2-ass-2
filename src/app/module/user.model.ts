import { Schema, model } from 'mongoose';
import { Address, Orders, User, UserName } from './user/user.interface';

const nameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    maxlength: [25, "'First Name must be less than 20 characters"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [25, "'Last Name must be less than 20 characters"],
  },
});

const addressSchema = new Schema<Address>({
  street: {
    type: String,
    required: [true, 'street is required'],
  },
  city: {
    type: String,
    required: [true, 'city is required'],
  },
  country: {
    type: String,
    required: [true, 'country is required'],
  },
});
const ordersSchema = new Schema<Orders>({
  productName: {
    type: String,
    required: [true, 'product Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required'],
  },
});

const userSchema = new Schema<User>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'username is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  fullName: {
    type: nameSchema,
    required: [true, 'name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },

  email: {
    type: String,
    required: [true, 'email is required'],
  },
  isActive: {
    type: Boolean,
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: true,
  },
  orders: {
    type: [ordersSchema],
  },
});

export const UserModel = model<User>('User', userSchema);
