import express from "express";
import { checkJWT } from "../middlewares/auth.js";
import { checkRole } from "../middlewares/checkRole.js";
import User from "../models/User.js";
import { uploadPicture, deletePicture } from "../utils/cloudinary.js";

const router = express.Router();

router.post("/auth/load", checkJWT, async (req, res) => {
  const auth0Id = req.auth.payload.sub;
  const { email, name, nickname, picture } = req.body;

  try {
    let user = await User.findOne({ auth0Id }).select("-auth0Id -__v");

    if (!user) {
      const uploadedPicture = await uploadPicture(picture, `${Date.now()}`);

      user = await User.create({
        auth0Id,
        email,
        name,
        nickname,
        picture: uploadedPicture,
        role: "user",
      });

      user = user.toObject();
      delete user.auth0Id;
      delete user.__v;
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error loading user:", error);
    return res.status(500).json({ message: "Error loading user" });
  }
});

router.get("/admin/users", checkJWT, checkRole(["admin"]), async (req, res) => {
  try {
    const users = await User.find().select("-auth0Id -__v");
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    return res.status(500).json({ message: "Error getting users" });
  }
});

router.post(
  "/admin/users/:userId",
  checkJWT,
  checkRole(["admin"]),
  async (req, res) => {
    const { userId, role } = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { role },
        { new: true }
      ).select("-auth0Id -__v");

      if (!updatedUser)
        return res.status(404).json({ message: "User no found!" });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error changing role:", error);
      return res.status(500).json({ message: "Error changing role" });
    }
  }
);

router.post("/user/profile", checkJWT, async (req, res) => {
  const auth0Id = req.auth.payload.sub;
  const { newName, newPicture } = req.body;

  try {
    let user = await User.findOne({ auth0Id });

    if (!user) return res.status(404).json({ message: "User not found!" });

    if (
      newPicture &&
      user.picture?.public_id &&
      newPicture.public_id !== user.picture.public_id
    )
      await deletePicture(user.picture.public_id);

    if (newName) user.name = newName;
    if (newPicture) user.picture = newPicture;
    await user.save();

    user = user.toObject();
    delete user.auth0Id;
    delete user.__v;
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Error updating user" });
  }
});

export default router;
