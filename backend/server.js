import express from 'express';
import cookieParser from 'cookie-parser';
import cros from 'cors';
import 'dotenv/config';

import connectDB from './configs/db.config.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/auth.routes.js';
import messageRouter from './routes/auth.routes.js';

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cros({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/message', messageRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
