import messageModels from "../models/message.models.js";

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const sender = req.user.id;
    const { receiver } = req.params;

    if (!sender || !receiver || !text) {
      return res.status(500).json({
        message: "required all field",
      });
    }

    if (!sender || !receiver || !text) {
      return res.status(500).json({
        message: "required all field",
      });
    }

    const newMessage = await messageModels.create({
      sender,
      receiver,
      text,
      file: req.file.path,
    });

    if (!newMessage) {
      return res.status(500).json({ message: "message is not created" });
    }

    return res.status(200).json({ message: "message created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const sender = req.user.id;
    const { receiver } = req.params;

    if (!sender || !receiver) {
      return res.status(500).json({
        message: "required all field",
      });
    }

    const messages = await messageModels.find({
      $or: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    });

    if (!messages) {
      return res.status(500).json({ message: "message is not found" });
    }

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

import  {}
