import { Request, Response } from 'express';
import { userServices } from './user.service';
import { validateUserSchema } from './user.validation';
import { TUser } from './user.interface';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const zodParsedData = validateUserSchema.parse(user) as TUser;
    const result = await userServices.createUserIntoDB(zodParsedData);
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserIntoDB();
    return res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUserIntoDB(userId);
    return res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};

const updateUserData = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const userData = req.body;
    const result = await userServices.updateUserIntoDB(userId, userData);
    return res.status(200).json({
      success: true,
      message: 'User update successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};
const orderUserDataAdd = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const orderData = req.body;
    const result = await userServices.addOrderUserIntoDB(userId, orderData);
    return res.status(200).json({
      success: true,
      message: 'Add Orders successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};
const getUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getUserOrderIntoDB(userId);
    if (result === null) {
      return res.status(404).json({
        success: false,
        message: 'user not Found',
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: ' Order fetched successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};
const totalPriceUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.totalOrderPriceIntoDB(userId);

    if (result === null) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error calculating total order price',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};
const deleteUserData = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.deleteUserIntoDB(userId);
    return res.status(200).json({
      success: true,
      message: 'User delete successfully!',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error: {
        code: 404,
        description: 'User not found!',
      },
      fullError: err,
    });
  }
};

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUserData,
  deleteUserData,
  orderUserDataAdd,
  getUserOrder,
  totalPriceUserOrder,
};
