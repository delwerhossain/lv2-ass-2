import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

router.post('/', userControllers.createUser);
router.get('/', userControllers.getAllUser);
router.get('/:userId', userControllers.getSingleUser);
router.post('/:userId', userControllers.updateUserData);
router.delete('/:userId', userControllers.deleteUserData);

export const userRoute = router;
