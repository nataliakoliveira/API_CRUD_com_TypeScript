import express from 'express';
import LoginController from '../controllers/login.controller';
import login from '../middlewares/login';

const loginController = new LoginController();

const loginRouter = express.Router();

loginRouter.post('/', login, loginController.login);

export default loginRouter;