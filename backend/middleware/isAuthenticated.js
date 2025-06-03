import { verifyToken } from '../utils/jwt.utils.js';

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
