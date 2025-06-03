import userModels from '../models/user.models.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.utils.js';
import { generateToken } from '../utils/jwt.utils.js';

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(500).json({
        message: 'required all field',
      });
    }

    const user = await userModels.findOne({ email });

    if (user) {
      return res.status(500).json({ message: 'already user existing' });
    }

    const hashingPassword = await hashPassword(password);

    if (!hashingPassword) {
      return res.status(500).json({ message: 'password is not hashing' });
    }

    const newUser = await userModels.create({
      fullName,
      email,
      password: hashingPassword,
      profileImage: req.file.path,
    });

    if (!newUser) {
      return res.status(500).json({ message: 'user is not created' });
    }

    const token = generateToken(newUser._id);

    if (!token) {
      return res.status(500).json({ message: 'token is not generated' });
    }

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 3600000),
    });

    return res.status(200).json({ message: 'user created' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).json({
        message: 'required all field',
      });
    }

    const user = await userModels.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: 'user is not found' });
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(500).json({ message: 'password is not match' });
    }

    const token = generateToken(user._id);

    if (!token) {
      return res.status(500).json({ message: 'token is not generated' });
    }

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 3600000),
    });

    return res.status(200).json({ message: 'login success' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });

    return res.status(200).json({ message: 'logout success' });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const checkAuthorization = async (req, res) => {
  try {
    return res.status(200).json({ authorized: true });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
