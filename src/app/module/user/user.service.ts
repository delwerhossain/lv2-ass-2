import { UserModel } from '../user.model';
import { Orders, User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find({ isDelete: false });
  // { isDelete: false }
  return result;
};
const getSingleUserIntoDB = async (userId: number) => {
  const result = await UserModel.findOne({ isDelete: false, userId });
  return result;
};
const updateUserIntoDB = async (userId: number, data: Partial<User>) => {
  const result = await UserModel.updateOne({ userId: userId }, { $set: data });
  return result;
};
const addOrderUserIntoDB = async (userId: number, data: Orders) => {
  console.log({ userId, data });
  const result = await UserModel.updateOne(
    { userId: userId },
    { $push: { orders: data } },
  );
  return result;
};
const getUserOrderIntoDB = async (userId: number) => {
  const user = await UserModel.findOne({ isDelete: false, userId });
  if (!user) {
    return null;
  }
  const result = user?.orders || [];
  return result;
};
const deleteUserIntoDB = async (userId: number) => {
  const result = await UserModel.updateOne(
    { userId: userId },
    { $set: { isDelete: true } },
  );
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserIntoDB,
  deleteUserIntoDB,
  addOrderUserIntoDB,
  getUserOrderIntoDB,
};
