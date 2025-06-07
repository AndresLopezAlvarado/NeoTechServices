import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

export default mongoose.model("User", UserSchema);
