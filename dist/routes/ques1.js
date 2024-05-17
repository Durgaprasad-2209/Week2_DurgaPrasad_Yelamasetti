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
exports.ques1router = void 0;
const express_1 = __importDefault(require("express"));
const service_1 = require("./../service");
exports.ques1router = express_1.default.Router();
exports.ques1router.post('/fetch-orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = req.body.items;
        if (!orders || !Array.isArray(orders)) {
            return res.status(400).send('Invalid input, expected an array of orders.');
        }
        console.log('Received orders:', orders);
        yield (0, service_1.fetchAndStoreOrders)(orders);
        res.send('Orders fetched and stored successfully');
    }
    catch (error) {
        console.error('Error in /fetch-orders endpoint:', error);
        res.status(500).send('Error fetching and storing orders');
    }
}));
//# sourceMappingURL=ques1.js.map