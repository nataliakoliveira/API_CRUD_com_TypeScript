import dotenv from 'dotenv';
import { sign, verify, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const signToken = (payload: IUser) => {
  const options: SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = sign(payload, secret, options);

  return token;
};

export const verifyToken = (token: string) => {
  const decoded = verify(token, secret);

  return decoded;
};