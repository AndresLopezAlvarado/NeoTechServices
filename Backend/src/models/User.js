import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    auth0Id: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    name: { type: String, trim: true },
    nickname: { type: String, trim: true },
    picture: { secure_url: String, public_id: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
