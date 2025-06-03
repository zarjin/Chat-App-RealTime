import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    reveiver: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    file: {
      type: String,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const messageModels = mongoose.model('Message', messageSchema);

export default messageModels;
