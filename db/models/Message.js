import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const messageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  recipientId: { type: Schema.Types.ObjectId, ref: "User" },
  entryId: { type: Schema.Types.ObjectId, ref: "Entry" },
  message: { type: [String], required: true },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
