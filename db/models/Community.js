import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const communitySchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  recipientId: { type: String, required: true },
  entryId: { type: String, required: true },
  hug: { type: String, required: true },
  flowers: { type: String, required: true },
  activity: { type: String, required: true },
});

const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
