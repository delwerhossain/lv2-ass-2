import { Schema, model } from 'mongoose';
import { TAddress, TOrders, TUser, TUserName } from './user/user.interface';
import config from '../config';
import bcrypt from 'bcrypt';

const nameSchema = new Schema<TUserName>({
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

const addressSchema = new Schema<TAddress>({
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
const ordersSchema = new Schema<TOrders>({
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

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    trim: true,
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
  isDelete: {
    type: Boolean,
    default: false,
  },
});

// Query Middleware

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
userSchema.pre('find', function (next) {
  this.find({ isDelete: { $ne: true } });
  next();
});

userSchema.pre('findOne', function (next) {
  this.findOne({ isDelete: { $ne: true } });
  next();
});
userSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDelete: { $ne: true } } });
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', userSchema);
