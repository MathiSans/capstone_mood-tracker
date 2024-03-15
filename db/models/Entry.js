import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  time: String,
  user: String,
  location: String,
  experience: String,
  color: String,
  intensity: Number,
  reactions: [String],
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
