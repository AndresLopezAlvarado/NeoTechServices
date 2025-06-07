import { AUTH0_DOMAIN, AUTH0_AUDIENCE } from "../../config.js";
import { auth } from "express-oauth2-jwt-bearer";

export const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: `https://${AUTH0_DOMAIN}`,
});
