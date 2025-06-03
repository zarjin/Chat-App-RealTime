import express from 'express';
import {
  getUser,
  getAllUsers,
  getAuthorizedUser,
} from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const userRouter = express.Router();

userRouter.get('/get-user/:id', getUser);
userRouter.get('/get-all-users', getAllUsers);
userRouter.get('/get-authorized-user', isAuthenticated, getAuthorizedUser);

export default userRouter;
