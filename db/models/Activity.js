import mongoose from "mongoose";

const { Schema } = mongoose;

const activitySchema = new Schema({
  title: String,
  emoji: String,
  description: String,
  forEmotion: [String],
  tool: Boolean,
  link: String,
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
