"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/module/user/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use((0, cors_1.default)());
app.use('/api/users', user_route_1.userRoute);
app.get('/', (req, res) => {
    res.send('working Level 2 Assessment 2');
});
exports.default = app;
