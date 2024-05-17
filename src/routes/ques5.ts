
import express, { Request, Response } from 'express';
import { MyTable } from './../db';

export const ques5router = express.Router();



ques5router.use(async (req, res, next) => {
  try {
    await MyTable.sync();  
    next();
  } catch (error) {
    console.error('Failed to ensure table exists', error);
    res.status(500).send('Internal Server Error');
  }
});


ques5router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await MyTable.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});


ques5router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send('Name is required');
    }

    const newRecord = await MyTable.create({ name });
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default ques5router;
