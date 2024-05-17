import express from 'express';
import { fetchAndStoreOrders } from './service';
import  sequelize  from './pgConfig';
import Order from './usermodel';
import {ques1router} from './routes/ques1';
import {ques2router} from './routes/ques2';
import {ques5router} from './routes/ques5';

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synchronized...');
  })
  .catch((err: any) => console.error('Database connection error:', err));
  app.use('/', ques1router);
  app.use('/', ques2router);
  app.use('/api', ques5router);
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



