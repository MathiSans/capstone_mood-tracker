import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const communitySchema = new Schema({
  localCreationDate: { type: Schema.Types.Mixed, required: true },
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  recipientId: { type: String, required: true },
  entryId: { type: String, required: true },
  emoji: { type: [String], required: true },
  hug: { type: String, required: false },
  flowers: { type: String, required: false },
  activity: { type: Schema.Types.Mixed, required: false },
});

const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
