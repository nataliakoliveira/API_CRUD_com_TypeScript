import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<number> => {
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [
      user.username,
      user.vocation,
      user.level,
      user.password,
    ]);

    return insertId;
  };
}