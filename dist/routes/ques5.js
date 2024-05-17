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
exports.ques5router = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./../db");
exports.ques5router = express_1.default.Router();
exports.ques5router.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.MyTable.sync();
        next();
    }
    catch (error) {
        console.error('Failed to ensure table exists', error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.ques5router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db_1.MyTable.findAll();
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.ques5router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send('Name is required');
        }
        const newRecord = yield db_1.MyTable.create({ name });
        res.status(201).json(newRecord);
    }
    catch (error) {
        console.error('Error creating record:', error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = exports.ques5router;
//# sourceMappingURL=ques5.js.map