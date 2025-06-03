import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import { userMessage } from '../middleware/upload.cloudinary.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const messageRouter = express.Router();

messageRouter.post(
  '/send-message/:receiver',
  isAuthenticated,
  userMessage.single('file'),
  sendMessage
);
messageRouter.get('/get-messages/:receiver', isAuthenticated, getMessages);

export default messageRouter;
