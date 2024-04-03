import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String,
  name: { type: String, require: true },
  email: { type: String, require: true },
});

const Entry = mongoose.models.User || mongoose.model("User", userSchema);
