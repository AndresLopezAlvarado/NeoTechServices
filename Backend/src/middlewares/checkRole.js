import User from "../models/User.js";

export const checkRole = (roles) => {
  return async (req, res, next) => {
    try {
      const auth0Id = req.auth.payload.sub;
      const user = await User.findOne({ auth0Id });

      if (!user)
        return res.status(401).json({ message: "Usuario no registrado" });

      if (!roles.includes(user.role))
        return res.status(403).json({ message: "Usuario no autorizado" });

      // Opcional: incluir usuario en la req para usarlo más adelante
      // req.user = user;

      next();
    } catch (error) {
      console.error("Error al verificar el rol del usuario:", error);
      return res
        .status(500)
        .json({ message: "Error al verificar el rol del usuario" });
    }
  };
};
