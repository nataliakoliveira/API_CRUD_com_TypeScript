import { Response, Request } from 'express';
import LoginService from '../services/login.service';
import { signToken } from '../utils/jwt';

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const user = await this.loginService.login(req.body);
    const token = signToken(req.body);

    if (!token) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    return res.status(200).json({ token });
  };
}