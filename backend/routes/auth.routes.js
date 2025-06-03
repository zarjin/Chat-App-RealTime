import express from 'express';
import {
  register,
  login,
  logout,
  checkAuthorization,
} from '../controllers/auth.controller.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import { userUpload } from '../middleware/upload.cloudinary.js';

const authRouter = express.Router();

authRouter.post('/register', userUpload.single('profileImage'), register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/check-authorization', isAuthenticated, checkAuthorization);

export default authRouter;
