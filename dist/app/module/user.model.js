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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const nameSchema = new mongoose_1.Schema({
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
const addressSchema = new mongoose_1.Schema({
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
const ordersSchema = new mongoose_1.Schema({
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
const userSchema = new mongoose_1.Schema({
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
        select: false,
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
        select: false,
    },
});
// Query Middleware
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.default.bcrypt_salt_rounds));
        next();
    });
});
userSchema.pre('find', function (next) {
    this.find({ isDelete: { $ne: true } });
    next();
});
userSchema.pre('findOne', function (next) {
    this.findOne({ isDelete: { $ne: true } });
    next();
});
// userSchema.post('find', function (docs, next) {
//   // Exclude isDelete and password fields from each document in the response
//   docs.forEach((doc) => {
//     doc.isDelete = undefined;
//     doc.password = undefined;
//   });
//   next();
// });
// userSchema.post('findOne', function (doc, next) {
//   // Exclude isDelete and password fields from the single document in the response
//   doc.isDelete = undefined;
//   doc.password = undefined;
//   next();
// });
userSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDelete: { $ne: true } } });
    next();
});
userSchema.post('save', function (doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        doc.password = '';
        next();
    });
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
