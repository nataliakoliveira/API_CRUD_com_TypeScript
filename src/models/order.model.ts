import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interface';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    // parte da logica da query feita pelo viniBortoletto, não estava conseguindo fazer sozinha
    const [orders] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, o.user_id as userId,
                   JSON_ARRAYAGG(p.id) as productsIds
                   FROM Trybesmith.orders o
                   INNER JOIN Trybesmith.products p
                   ON o.id = p.order_id
                   GROUP BY o.id`,
    );
    return orders;
  }
}