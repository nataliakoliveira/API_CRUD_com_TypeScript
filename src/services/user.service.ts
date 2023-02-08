import UserModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import connection from '../models/connection';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public create = async (user: IUser) => {
    const createdUser = await this.userModel.create(user);
    return createdUser;
  };
}