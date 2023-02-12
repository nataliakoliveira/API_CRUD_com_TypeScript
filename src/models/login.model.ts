import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';

export default class LoginModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async login(body: ILogin): Promise<ILogin> {
    const [[result]] = await this.connection.execute<RowDataPacket[] & ILogin>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [body.username, body.password],
    );

    return result as ILogin;
  }
}