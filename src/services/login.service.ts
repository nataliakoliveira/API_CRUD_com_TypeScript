import connection from '../models/connection';
import { ILogin } from '../interfaces/login.interface';
import LoginModel from '../models/login.model';
import UserModel from '../models/user.model';

export default class LoginService {
  loginModel: LoginModel;
  
  userModel: UserModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
    this.userModel = new UserModel(connection);
  }

  async login(body: ILogin) {
    const login = await this.loginModel.login(body);
    return login;
  }
}