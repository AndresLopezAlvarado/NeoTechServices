import express from "express";
import { PORT, FRONTEND_URL } from "../config.js";
import cors from "cors";
import router from "./routes/routes.js";
import { connectDB } from "./db.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

app.use("", router);

await connectDB();

app.listen(PORT, () => {
  console.log(`🚀 NeoTech Services App is running on port ${PORT}`);
});
