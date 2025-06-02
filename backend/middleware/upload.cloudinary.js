import cloudinary from '../configs/cloudinary.config.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

const userStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async () => ({
    folder: 'User-Profile',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  }),
});

const messageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async () => ({
    folder: 'User-Profile',
    allowedFormats: ['jpg', 'png', 'jpeg'],
  }),
});

export const userUpload = multer({ storage: userStorage });

export const userMessage = multer({ storage: messageStorage });
