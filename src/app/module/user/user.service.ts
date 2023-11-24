import { UserModel } from '../user.model';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserIntoDB = async () => {
  const result = await UserModel.find();
  // { isDelete: false }
  return result;
};
const getSingleUserIntoDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
};
