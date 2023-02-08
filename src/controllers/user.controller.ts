import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const secret = process.env.JWT_SECRET || 'secret';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const createdUser = await this.userService.create(user);
    const token = jwt.sign({ data: createdUser }, secret, { expiresIn: '7d' });
    res.status(201).json({ token });
  };
}