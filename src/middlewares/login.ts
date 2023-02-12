import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ILogin } from '../interfaces/login.interface';

const loginSchema = (body: ILogin) => Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

export default validateLogin;