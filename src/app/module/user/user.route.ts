import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

router.get('/', userControllers.getAllUser);
router.get('/:userId', userControllers.getSingleUser);
router.post('/', userControllers.createUser);
router.put('/:userId', userControllers.updateUserData);
router.get('/:userId/orders', userControllers.getUserOrder);
router.put('/:userId/orders', userControllers.orderUserDataAdd);
// router.get('/:userId/orders/total-price', userControllers.orderUserDataAdd);
router.delete('/:userId', userControllers.deleteUserData);

export const userRoute = router;
