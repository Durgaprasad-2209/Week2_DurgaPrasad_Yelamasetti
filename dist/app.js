"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pgConfig_1 = __importDefault(require("./pgConfig"));
const ques1_1 = require("./routes/ques1");
const ques2_1 = require("./routes/ques2");
const ques5_1 = require("./routes/ques5");
const app = (0, express_1.default)();
app.use(express_1.default.json());
pgConfig_1.default.authenticate()
    .then(() => {
    console.log('Database connected...');
    return pgConfig_1.default.sync();
})
    .then(() => {
    console.log('Database synchronized...');
})
    .catch((err) => console.error('Database connection error:', err));
app.use('/', ques1_1.ques1router);
app.use('/', ques2_1.ques2router);
app.use('/api', ques5_1.ques5router);
// app.post('/fetch-orders', async (req, res) => {
//   try {
//     const orders = req.body.items;
//     if (!orders || !Array.isArray(orders)) {
//       return res.status(400).send('Invalid input, expected an array of orders.');
//     }
//     console.log('Received orders:', orders);
//     await fetchAndStoreOrders(orders);
//     res.send('Orders fetched and stored successfully');
//   } catch (error) {
//     console.error('Error in /fetch-orders endpoint:', error);
//     res.status(500).send('Error fetching and storing orders');
//   }
// });
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map