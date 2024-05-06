import mongoose from "mongoose";
import "./User";

const { Schema } = mongoose;

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  emoji: [String],
  description: String,
  forEmotion: [String],
  tool: Boolean,
  link: String,
  shapeIndex: Number,
  shapeType: String,
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
