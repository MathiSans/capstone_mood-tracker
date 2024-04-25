import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const communitySchema = new Schema({
  localCreationDate: { type: Schema.Types.Mixed, required: true },
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  recipientId: { type: String, required: true },
  entryId: { type: String, required: true },
  hug: { type: String, required: true },
  flowers: { type: String, required: true },
  activity: { type: Schema.Types.Mixed, required: true },
});

const Community =
  mongoose.models.Community || mongoose.model("Community", communitySchema);

export default Community;
