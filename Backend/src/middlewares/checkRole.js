import User from "../models/User.js";

export const checkRole = (roles) => {
  return async (req, res, next) => {
    try {
      const auth0Id = req.user.sub;
      const user = await User.findOne({ auth0Id });

      if (!user)
        return res.status(401).json({ message: "Usuario no registrado" });

      if (!roles.includes(user.role))
        return res.status(403).json({ message: "No autorizado" });

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };
};
