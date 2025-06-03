import userModels from '../models/user.models.js';

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(500).json({
        message: 'required all field',
      });
    }

    const user = await userModels.findById(id);

    if (!user) {
      return res.status(500).json({ message: 'user is not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModels.find();

    if (!users) {
      return res.status(500).json({ message: 'users is not found' });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAuthorizedUser = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(500).json({
        message: 'required all field',
      });
    }

    const user = await userModels.findById(userId);

    if (!user) {
      return res.status(500).json({ message: 'user is not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
