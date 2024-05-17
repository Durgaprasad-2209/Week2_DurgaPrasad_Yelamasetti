
import axios from 'axios';
import Order from './usermodel';


interface OrderBlock {
  LineNo: number;
}

interface OrderData {
  orderID: string;
  OrderBlocks: OrderBlock[];
}

export function isOrderValid(order: OrderData): boolean {
  return order.OrderBlocks.some(block => block.LineNo % 3 === 0);
}

export async function fetchAndStoreOrders(orders: OrderData[]): Promise<void> {
  try {
    for (const order of orders) {
      if (isOrderValid(order)) {
        console.log(`Storing orderID: ${order.orderID}`);
        await Order.create({ orderID: order.orderID });
      }
    }
  } catch (error) {
    console.error('Error storing orders:', error);
  }
}
