import mongoose from "mongoose";

const { Schema } = mongoose;
const entrySchema = new Schema({
  date: { type: Date, default: Date.now },
  location: String,
  experience: [{ String }],
  intensity: Number,
  reactions: [{ String }],
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
