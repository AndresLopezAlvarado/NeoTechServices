import express from "express";
import { checkJwt } from "../middlewares/auth.js";
import { checkRole } from "../middlewares/checkRole.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/profile", checkJwt, (req, res) => {
  res.send("Perfil público del usuario");
});

router.get("/admin", checkJwt, checkRole(["admin"]), (req, res) => {
  res.send("Solo para administradores");
});

router.get("/user", checkJwt, checkRole(["user", "admin"]), (req, res) => {
  res.send("Área de clientes");
});

router.post("/api/auth/init", checkJwt, async (req, res) => {
  const { auth0Id, email, name, picture } = req.body;
  let user = await User.findOne({ auth0Id });

  if (!user)
    user = await User.create({ auth0Id, email, name, picture, role: "user" });

  res.json({
    message: "Usuario verificado",
    user,
  });
});

export default router;
