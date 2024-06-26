import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  user: String,
  time: String,
  location: {
    city: String,
    region: String,
  },
  experience: String,
  color: String,
  intensity: Number,
  reactions: [String],
});

const Entry = mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default Entry;
