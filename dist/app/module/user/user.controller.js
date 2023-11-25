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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const zodParsedData = user_validation_1.validateUserSchema.parse(user);
        const result = yield user_service_1.userServices.createUserIntoDB(zodParsedData);
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    }
    catch (err) {
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
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.userServices.getAllUserIntoDB();
        return res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (err) {
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
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const result = yield user_service_1.userServices.getSingleUserIntoDB(userId);
        return res.status(200).json({
            success: true,
            message: 'Users fetched successfully!',
            data: result,
        });
    }
    catch (err) {
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
});
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const userData = req.body;
        const result = yield user_service_1.userServices.updateUserIntoDB(userId, userData);
        return res.status(200).json({
            success: true,
            message: 'User update successfully',
            data: result,
        });
    }
    catch (err) {
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
});
const orderUserDataAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const orderData = req.body;
        const result = yield user_service_1.userServices.addOrderUserIntoDB(userId, orderData);
        return res.status(200).json({
            success: true,
            message: 'Add Orders successfully',
            data: result,
        });
    }
    catch (err) {
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
});
const getUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const result = yield user_service_1.userServices.getUserOrderIntoDB(userId);
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
    }
    catch (err) {
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
});
const totalPriceUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const result = yield user_service_1.userServices.totalOrderPriceIntoDB(userId);
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
    }
    catch (err) {
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
});
const deleteUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number(req.params.userId);
        const result = yield user_service_1.userServices.deleteUserIntoDB(userId);
        return res.status(200).json({
            success: true,
            message: 'User delete successfully!',
            data: result,
        });
    }
    catch (err) {
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
});
exports.userControllers = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUserData,
    deleteUserData,
    orderUserDataAdd,
    getUserOrder,
    totalPriceUserOrder,
};
