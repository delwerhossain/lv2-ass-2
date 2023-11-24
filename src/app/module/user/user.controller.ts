import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userServices.createUserIntoDB(user);
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserIntoDB();
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUserIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'error , something went wrong',
      error,
    });
  }
};

const updateUserData = async(req:Request, res:Response) => {
  try {
    const userId = Number(req.params.userId);
    const userData = req.body
     const result = await userServices.updateUserIntoDB(userId, userData);
     res.status(200).json({
       success: true,
       message: 'User update successfully',
       data: result,
     });
  } catch (error) {
     res.status(500).json({
       success: false,
       message: 'error , something went wrong',
       error,
     });
  }
}
const deleteUserData = async(req:Request, res:Response) => {
  try {
    const userId = Number(req.params.userId);
     const result = await userServices.deleteUserIntoDB(userId);
     res.status(200).json({
       success: true,
       message: 'User delete successfully',
       data: result,
     });
  } catch (error) {
     res.status(500).json({
       success: false,
       message: 'error , something went wrong',
       error,
     });
  }
}

export const userControllers = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUserData,
  deleteUserData,
};
