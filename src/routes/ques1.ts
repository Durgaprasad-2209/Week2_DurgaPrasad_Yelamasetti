import express, { Request, Response } from 'express';
import { fetchAndStoreOrders } from './../service';


export const ques1router = express.Router()


ques1router.post('/fetch-orders', async (req: Request, res: Response) => {
    try {
      const orders = req.body.items;
      if (!orders || !Array.isArray(orders)) {
        return res.status(400).send('Invalid input, expected an array of orders.');
      }
      console.log('Received orders:', orders);
      await fetchAndStoreOrders(orders);
      res.send('Orders fetched and stored successfully');
    } catch (error) {
      console.error('Error in /fetch-orders endpoint:', error);
      res.status(500).send('Error fetching and storing orders');
    }
  });