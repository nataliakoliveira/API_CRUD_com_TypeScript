import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/order.interface';
import connection from '../models/connection';

export default class OrderService {
  private orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.getAll();
    return allOrders;
  }
}