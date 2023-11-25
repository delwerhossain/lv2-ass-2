"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const user_model_1 = require("../user.model");
const createUserIntoDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(user);
    return result;
});
const getAllUserIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find();
    return result;
});
const getSingleUserIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ userId });
    return result;
});
const updateUserIntoDB = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ userId: userId }, { $set: data });
    return result;
});
const addOrderUserIntoDB = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ userId: userId }, { $push: { orders: data } });
    return result;
});
const getUserOrderIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield user_model_1.UserModel.aggregate([
        {
            $match: {
                userId,
            },
        },
        {
            $project: {
                _id: 0,
                orders: 1,
            },
        },
    ]);
    if (orders.length === 0) {
        return null;
    }
    return orders;
});
const totalOrderPriceIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = yield user_model_1.UserModel.aggregate([
        { $match: { userId } },
        {
            $unwind: '$orders',
        },
        {
            $group: {
                _id: null,
                totalPrice: {
                    $sum: {
                        $multiply: ['$orders.price', '$orders.quantity'],
                    },
                },
            },
        },
        {
            $project: {
                _id: 0,
                totalPrice: 1,
            },
        },
    ]);
    if (orderData.length === 0) {
        return null;
    }
    return orderData;
});
const deleteUserIntoDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ userId: userId }, { $set: { isDelete: true } });
    return result;
});
exports.userServices = {
    createUserIntoDB,
    getAllUserIntoDB,
    getSingleUserIntoDB,
    updateUserIntoDB,
    deleteUserIntoDB,
    addOrderUserIntoDB,
    getUserOrderIntoDB,
    totalOrderPriceIntoDB,
};
