import express from "express";
import authRoutes from "./routes/authRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
const app = express();


app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/vehicles",vehicleRoutes);

export default app;